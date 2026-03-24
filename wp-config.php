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
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',          'kl|-xToForRZjk]^[[qKYml/@;+I:Z?&V^M6RsK&NCcHXnj%??T~Ts{3)snDB-5U' );
define( 'SECURE_AUTH_KEY',   'ITI+AC6?^SU=YJ{sU#Lvf+w@p,_QC8aOA%t(0H$B-)$Mp!ig<(ZdzQu7oI9?WwI,' );
define( 'LOGGED_IN_KEY',     'Z2`|JrQ/kHz:hWiLP96>kvP#,seY7*r=_J.{$!?|I03J-^NA<6/={!a;c[&!f8*5' );
define( 'NONCE_KEY',         '~m!^5oz}<pH?~Y#pZnP=oI/ Q-&ky>;|_`@daV$3h%vM:|l$3z?TI5/tE>Pg9$AA' );
define( 'AUTH_SALT',         '<P _ 6V-_Ee49Q }lKa?).aDe=A-.py5d^UjMaUGs$q3j;eT:hM#ChLAp~zk;.LI' );
define( 'SECURE_AUTH_SALT',  'Q<O%7rQy2zqv_5IDmQ9,[EXa}W39g.N~NAiL]CIc*PuS|S2A{Z51`Q>B/Okd4l#N' );
define( 'LOGGED_IN_SALT',    'Aaw/-goA+v7K{2>0j~/-L1re)JFBe-L?D_qJFP,,vZ1)YdQ;Kg:Dg+zXI[~h=JS~' );
define( 'NONCE_SALT',        ' ?FR$cViX1=G~/:<$q1*x^Im`zR]Ayt}bTCJS` LeG%jsy;!sKwe<.x_;CoW#`2o' );
define( 'WP_CACHE_KEY_SALT', 'hj GzP:ALL8 ex>Q/UBs0C]dor}P>F1lqFNr++,(9+~|p)R[]%vmm`XOQs(+=}K+' );


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

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
