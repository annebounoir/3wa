<?php

include('database/connection.php');

$stmt = $connection->prepare("UPDATE tasks SET tasks deadline = :deadline, titre = :titre, description = :description, priorite = :priorite, statut = :statut WHERE id = :task_id");

$stmt->bindParam(':deadline', $deadline);
$stmt->bindParam(':titre', $titre);
$stmt->bindParam(':description', $description);
$stmt->bindParam(':priorite', $priorite);
$stmt->bindParam(':statut', $statut);
$stmt->bindParam(':task_id', $task_id);

$stmt->execute();
$connection = null;
header('location: http://localhost/developpement/php/phpj3/todolist/');


$handle = fopen('file.csv', 'r');
while($tasks = fgetcsv($handle)) {

}
//var_dump($tasks);
fclose($handle);
