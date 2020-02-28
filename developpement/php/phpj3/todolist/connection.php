<?php

function clean($data) {
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);
  return $data;
}

try{
  $connection = new PDO(
    'mysql:host=127.0.0.1;dbname=todolist',
    'root',
    'troiswa',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
} catch (PDOException $erreur) {
  die($erreur->getMessage());
}

$connection->exec('SET NAMES utf8');

$query = $connection->prepare('SELECT * FROM tasks');

$query->execute();

// while($results = $query->fetch(PDO::FETCH_ASSOC)) {
//
// }

// ou si on ne veut pas la boucle =
$results = $query->fetchAll(PDO::FETCH_ASSOC);

// $connection = null;
