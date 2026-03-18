<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_rebuilt' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Z@w=v<momT7QFO_`8L138#n_ZPvo;x7XFZ?&$Yds[S9LQFnf44 ;I;OZP(xY~F$z' );
define( 'SECURE_AUTH_KEY',   'YFwia:J,`@S6vO$m8;V`j)/f&t<kng0H.jY-Zq1x&FDu(|rL[z;~{q%xI:o;UGUq' );
define( 'LOGGED_IN_KEY',     '5,r,0w4av8KW`SmD2Hd%Hk0!48h[h?G.cP~ozd6_Ym=GM;*r8V #m~*-kJCgFZ[n' );
define( 'NONCE_KEY',         'CixPD@eyN/J!kA(jk0zUzwVcS{Tjjn)`i$~TMSpWZqs`^l3#mzM4&M{pq>3C/yK&' );
define( 'AUTH_SALT',         'WKv$b!Ye;ts}Y`cMXbAn>n=,FjZ8p8HgLAm{M.RlmbggmGAnRtAt_ALpMUp]ZxSL' );
define( 'SECURE_AUTH_SALT',  '@mas$QCt6M`RluJNkv)i`t*M;6dcr_BxB~s=wJ:n4w:/7kad((v7~L`^(mFd3#;K' );
define( 'LOGGED_IN_SALT',    '/Gt}hs%vw.6wj<Ebk1X%ea7 p),/J}h`!d^Bf8eZP$IH:9pkrPMCX2r9cvxG2x6J' );
define( 'NONCE_SALT',        '1FRqhw`h@RlcC`$QM]bNtl,s}IM;{9LutU3&os8697ufQ`ZbLr0L2/lMy>m}d,nl' );
define( 'WP_CACHE_KEY_SALT', 'L&,$ij&xT{:vvx1SNr=/`_DB76ZEKPP&F~.S_I.t6~lJ;>ocEiTRe,XHY^6dI9u&' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
