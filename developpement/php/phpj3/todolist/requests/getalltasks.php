<?php

include('database/connection.php');


$connection->exec('SET NAMES utf8');
$query = $connection->prepare('SELECT * FROM tasks');
$query->execute();
$tasks = $query->fetchAll(PDO::FETCH_ASSOC);
