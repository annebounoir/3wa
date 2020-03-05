<?php
include('database/connexion.php');

$connection->exec('SET NAMES utf8');
$query = $connection->prepare('SELECT * FROM orders;');
$query->execute();
$orders = $query->fetchAll(PDO::FETCH_ASSOC);
$connection = null;
