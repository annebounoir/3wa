<?php

include('database/connection.php');
include('helper/helper_functions.php');


$form = $_POST;

if(isset($form['title']) && !empty($form['title'])) {
  $titre = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_STRING);
  $titre = clean($form['title']);
}

if(isset($form['description']) && !empty($form['description'])) {
  $description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
  $description = clean($form['description']);
}

if(isset($form['importance']) && !empty($form['importance'])) {
  $priorite = filter_input(INPUT_POST, 'importance', FILTER_SANITIZE_STRING);
  $priorite = clean($form['importance']);
}

if(isset($form['deadline']) && !empty($form['deadline'])) {
  $deadline = clean($form['deadline']);
  $deadline = explode("-", $form['deadline']);
  $is_date = checkdate((int)$deadline[1], (int)$deadline[2], (int)$deadline[0]);
  if ($is_date) {
    $deadline = implode("-", $deadline);
  }
}

if(isset($form['title']) && !empty($form['title'])) {
  $toDoList = [
    $deadline,
    $titre,
    $description,
    $priorite,
  ];

//ADD TASK
  $stmt = $connection->prepare("INSERT INTO tasks (deadline, titre, description, priorite, statut) VALUES (:deadline, :titre, :description, :priorite, :statut)");

  $stmt->bindParam(':deadline', $deadline);
  $stmt->bindParam(':titre', $titre);
  $stmt->bindParam(':description', $description);
  $stmt->bindParam(':priorite', $priorite);
  $stmt->bindParam(':statut', $priorite);

  $stmt->execute();
  $connection = null;
  header('location: http://localhost/developpement/php/phpj3/todolist/');

  $handle = fopen('file.csv', 'a');
  fputcsv ($handle, $toDoList);
  fclose($handle);
}
