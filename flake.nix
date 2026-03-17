{
  description = "Cwicly WordPress plugin";
 
  inputs = {
    nixpkgs.url        = "github:NixOS/nixpkgs/nixos-unstable";
    composition-c4.url = "github:fossar/composition-c4";
    devenv.url         = "github:cachix/devenv";
  };
 
  outputs = { self, nixpkgs, composition-c4, devenv, ... } @ inputs:
    let
      systems      = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
 
      pkgsFor = system: import nixpkgs {
        inherit system;
        overlays = [ composition-c4.overlays.default ];
      };
    in
    {
      devShells = forAllSystems (system:
        let pkgs = pkgsFor system; in
        {
          # ---------------------------------------------------------------- #
          # Development shell: devenv-managed environment                    #
          # ---------------------------------------------------------------- #
          default = devenv.lib.mkShell {
            inherit pkgs inputs;
            modules = [
              ( { pkgs, lib, config, ... }: {
                devenv.root = "/home/gideon/.gemini/antigravity/scratch/cwicly-rebuild/cwicly";
                packages = with pkgs; [ 
                  wp-cli 
                  curl 
                  unzip
                  php83.packages.composer
                  nodejs_24
                ];

                languages.php = {
                  enable = true;
                  package = pkgs.php83;
                  extensions = [ "mysqli" "pdo_mysql" "gd" "intl" "zip" "openssl" ];
                  fpm.pools.php = {
                    settings = {
                      "pm" = "dynamic";
                      "pm.max_children" = 5;
                      "pm.start_servers" = 2;
                      "pm.min_spare_servers" = 1;
                      "pm.max_spare_servers" = 3;
                    };
                  };
                };

                services.mysql = {
                  enable = true;
                  package = pkgs.mariadb;
                  initialDatabases = [
                    { name = "wordpress_original"; }
                    { name = "wordpress_rebuilt"; }
                  ];
                };

                services.caddy = {
                  enable = true;
                  config = ''
                    http://localhost:8002 {
                      root * ./sites/original
                      php_fastcgi unix/${config.languages.php.fpm.pools.php.socket}
                      file_server
                    }

                    http://localhost:8003 {
                      root * ./sites/rebuilt
                      php_fastcgi unix/${config.languages.php.fpm.pools.php.socket}
                      file_server
                    }
                  '';
                };

                scripts.setup.exec = ''
                  echo "🚀 Setting up WordPress environments..."
                  
                  mkdir -p sites/original sites/rebuilt
                  
                  # Download WP Core if not present
                  if [ ! -f sites/original/wp-load.php ]; then
                    echo "📥 Downloading WordPress core..."
                    wp core download --path=sites/original
                    cp -r sites/original/. sites/rebuilt/
                  fi

                  # Create wp-config.php for original
                  if [ ! -f sites/original/wp-config.php ]; then
                    echo "📝 Configuring original site..."
                    wp config create \
                      --path=sites/original \
                      --dbname=wordpress_original \
                      --dbuser=root \
                      --dbhost=localhost \
                      --extra-php <<PHP
define( 'WP_HOME', 'http://localhost:8002' );
define( 'WP_SITEURL', 'http://localhost:8002' );
PHP
                  fi

                  # Create wp-config.php for rebuilt
                  if [ ! -f sites/rebuilt/wp-config.php ]; then
                    echo "📝 Configuring rebuilt site..."
                    wp config create \
                      --path=sites/rebuilt \
                      --dbname=wordpress_rebuilt \
                      --dbuser=root \
                      --dbhost=localhost \
                      --extra-php <<PHP
define( 'WP_HOME', 'http://localhost:8003' );
define( 'WP_SITEURL', 'http://localhost:8003' );
PHP
                  fi

                  # Fix plugins directory
                  mkdir -p sites/original/wp-content/plugins
                  mkdir -p sites/rebuilt/wp-content/plugins

                  # Extract original plugin
                  if [ -f ../reference-cwicly.zip ]; then
                    echo "📦 Extracting original Cwicly..."
                    unzip -o ../reference-cwicly.zip -d sites/original/wp-content/plugins/
                    if [ -d sites/original/wp-content/plugins/cwicly-main ]; then
                      mv sites/original/wp-content/plugins/cwicly-main sites/original/wp-content/plugins/cwicly
                    fi
                  fi

                  # Symlink rebuilt plugin
                  echo "🔗 Symlinking rebuilt plugin..."
                  ln -sfn "$(pwd)" sites/rebuilt/wp-content/plugins/cwicly

                  echo "✅ Setup complete! Run 'devenv up' to start the services."
                '';

                env.WP_CLI = "${pkgs.wp-cli}/bin/wp";
              } )
            ];
          };
        }
      );

      packages = forAllSystems (system:
        let
          pkgs    = pkgsFor system;
          php     = pkgs.php83;
          inherit (pkgs) lib stdenvNoCC buildNpmPackage importNpmLock;

          pname   = "cwicly";
          version = "1.0.0";
          src     = self;

          # -------------------------------------------------------------- #
          # PHP / Composer vendor dependencies                               #
          # c4.fetchComposerDeps reads composer.lock per-package via        #
          # builtins.fetchGit — no hash needed.                             #
          # -------------------------------------------------------------- #
          composerDeps = pkgs.c4.fetchComposerDeps {
            inherit src;
          };

          # -------------------------------------------------------------- #
          # JS assets: wp-scripts build                                     #
          # importNpmLock reads integrity hashes from package-lock.json     #
          # directly — no npmDepsHash needed.                               #
          # -------------------------------------------------------------- #
          builtAssets = buildNpmPackage {
            inherit pname version src;

            npmDeps        = importNpmLock { npmRoot = src; };
            npmConfigHook  = importNpmLock.npmConfigHook;
            npmBuildScript = "build";

            installPhase = ''
              runHook preInstall
              mkdir -p $out
              cp -r build/. $out/
              runHook postInstall
            '';
          };

        in
        {
          # ---------------------------------------------------------------- #
          # Final plugin assembly                                            #
          # ---------------------------------------------------------------- #
          default = stdenvNoCC.mkDerivation {
            inherit pname version src composerDeps;

            nativeBuildInputs = [
              php
              php.packages.composer
              pkgs.c4.composerSetupHook
            ];

            buildPhase = ''
              runHook preBuild
              composer --no-ansi install --no-dev --no-interaction --optimize-autoloader
              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall

              pluginDir="$out/share/wordpress/plugins/cwicly"
              mkdir -p "$pluginDir"

              cp cwicly.php readme.txt wpml-config.xml "$pluginDir/"
              cp -r assets core vendor "$pluginDir/"

              # Compiled JS/CSS from wp-scripts build.
              mkdir -p "$pluginDir/build"
              cp -r ${builtAssets}/. "$pluginDir/build/"

              runHook postInstall
            '';

            meta = {
              description = "Maintenance build of the Cwicly WordPress plugin";
              license     = lib.licenses.isc;
              platforms   = lib.platforms.all;
            };
          };
        }
      );
    };
}
