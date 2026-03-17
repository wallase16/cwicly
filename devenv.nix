{ pkgs, lib, config, ... }:

{
  # ---------------------------------------------------------------- #
  # Packages and Languages                                           #
  # ---------------------------------------------------------------- #
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
  };

  # ---------------------------------------------------------------- #
  # Services: MySQL (MariaDB)                                        #
  # ---------------------------------------------------------------- #
  services.mysql = {
    enable = true;
    package = pkgs.mariadb;
    initialDatabases = [
      { name = "wordpress_original"; }
      { name = "wordpress_rebuilt"; }
    ];
  };

  # ---------------------------------------------------------------- #
  # Services: Caddy (Reverse Proxy and PHP handling)                #
  # ---------------------------------------------------------------- #
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

  # ---------------------------------------------------------------- #
  # Scripts: Setup and Management                                    #
  # ---------------------------------------------------------------- #
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
      # The zip might have a nested folder, rename if needed
      if [ -d sites/original/wp-content/plugins/cwicly-main ]; then
        mv sites/original/wp-content/plugins/cwicly-main sites/original/wp-content/plugins/cwicly
      fi
    fi

    # Symlink rebuilt plugin
    echo "🔗 Symlinking rebuilt plugin..."
    ln -sfn "$(pwd)" sites/rebuilt/wp-content/plugins/cwicly

    echo "✅ Setup complete! Run 'devenv up' to start the services."
  '';

  # ---------------------------------------------------------------- #
  # Env variables                                                   #
  # ---------------------------------------------------------------- #
  env.WP_CLI = "${pkgs.wp-cli}/bin/wp";
}
