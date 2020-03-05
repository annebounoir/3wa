<?php

include('config/dbconfig.php');

$host = $config['host'];
$dbname = $config['dbname'];

try{
  $connection = new PDO(
    "mysql:host=$host;dbname=$dbname",
    $config['dbuser'],
    $config['dbpassword'],
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
} catch (PDOException $erreur) {
  die($erreur->getMessage());
}
