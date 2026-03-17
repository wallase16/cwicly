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
define( 'DB_NAME', 'wordpress_original' );

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
define( 'AUTH_KEY',          'gO]0~jxx7.(5HJ*a)iZ*TZh? h<|yyNSRxAEai3RI=g2|PB($~;LH~{uqpbQ[*uO' );
define( 'SECURE_AUTH_KEY',   'KRZ/{DRXb;FQkz[^ P(<&8V!2p3AE}oUMIf3%-Hwg1Kl]S(U:/Oo[UuB_L(nefs9' );
define( 'LOGGED_IN_KEY',     'G[?sST8MZ2H>QFk~2MC]zq~;n52$;s6j1 X9hXthZ?AZLCK&h!#/0L9/vVo2rN&$' );
define( 'NONCE_KEY',         '+JUj ,I9D;g3|=WC=4:I8Oc| ?.-7$#-EVXHAhE7d(dw,G>4UX(2W0,_/D:N[n&z' );
define( 'AUTH_SALT',         'z,ZZc g79VqvK,2e6!o,}R?*s$8i-GU]%;DP@u>4CCA;st){?Y7| D+Q4I9VSy;s' );
define( 'SECURE_AUTH_SALT',  'P5iG@)jw<DL|(g5Z.5bE*tZGu!jxvqZxM[_G5Ux,cH)2P{Fjinh!mc3u)Md:sm4 ' );
define( 'LOGGED_IN_SALT',    'Hes;2t^BOG&V:i#G<>W#Ca#>zF9DN$aEPJOy$0x!zr57-^(I!ob~|>laCf)7(0w:' );
define( 'NONCE_SALT',        'Y.YkG|-qFzz1I(PgzJN8b]h:3FpaJyEyjImpfT7EjbYy%INkSfa:8cdzY7y=z-#T' );
define( 'WP_CACHE_KEY_SALT', '9[<2#U9EWt4O0Zu_*$%dz^2/<P/-9#m[m|9W-O@YUpfT&)B{2fjbOQGHme` XL&4' );


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
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
