<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wp_cupoftea' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'cupoftea' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'troiswa' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$dlz[NHcAdDkF:|_A68e=:BR9?4/|-+Xc%#Ri!^sQGS[X?eZ6{)[0L 1*dx/?Q8T' );
define( 'SECURE_AUTH_KEY',  ')EU3b[0K,`{yi%,P@|@qCA8kiEF`q,zxkKMQ=R_0Cq6UzXMu,n)[.;Gb$|7N@_QA' );
define( 'LOGGED_IN_KEY',    'B*<;p|YMm&~6~1[0[!|keb2(cRC< ?y_}~J_3xZPg2!-nRw<y,8t9tx1SYsA[VRf' );
define( 'NONCE_KEY',        '?v%U&w+6]{|=fT(Le}>H|hsU8liA+4($t?d<~TOr~uvpP%HC^;!]^8>36VI/fKr#' );
define( 'AUTH_SALT',        'Z^=FRvy6pk:JJdt(pF(4?bYOlI[pRHy] tMDYp DC$UVh))Nsg6J/MuB9H48/+PJ' );
define( 'SECURE_AUTH_SALT', 'z`ukjY+*+wb/A2>gY+Z}[IoLgt.03;hBYXYbx<q^>)p[c qNOg_8b$1Hp aE!O)^' );
define( 'LOGGED_IN_SALT',   '[&}eVct O(>Zj;O/A)/0`jemnXK#eU`g@OC{Wo/u:1`~{Ma4OeR)8,+cf.24[%,{' );
define( 'NONCE_SALT',       '7e.{;`.d`24%`]H?o^[d)8uH,T8T#{x6x%7jHj@N6onYc/15o[#?%Hq.,XBq<!(i' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
