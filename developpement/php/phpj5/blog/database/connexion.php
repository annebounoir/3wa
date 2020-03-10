<?php

if($_SERVER['REQUEST_URI'] === '/developpement/php/phpj5/blog/' || $_SERVER['QUERY_STRING']) {
    include('config/dbconfig.php');
} else {
    include('../config/dbconfig.php');
}

try {
    $pdo =  new PDO(
        'mysql:host='. $config['host'] .';dbname=' . $config['dbname'],
        $config['dbuser'],
        $config['dbpassword'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    $pdo->exec('set NAMES utf8');
} catch (PDOException $e) {
    die($e->getMessage());
}
