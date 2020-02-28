<?php

include('connection.php');
//var_dump($connection);

$form = $_POST;
$deleteform = $_POST;




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
  $handle = fopen('file.csv', 'a');
  fputcsv ($handle, $toDoList);
  fclose($handle);

  $stmt = $connection->prepare("INSERT INTO tasks (deadline, titre, description, priorite, statut) VALUES (:deadline, :titre, :description, :priorite, :statut)");

  $stmt->bindParam(':deadline', $deadline);
  $stmt->bindParam(':titre', $titre);
  $stmt->bindParam(':description', $description);
  $stmt->bindParam(':priorite', $priorite);
    $stmt->bindParam(':statut', $priorite);

  $stmt->execute();
  $connection = null;
  header('location: http://localhost/developpement/php/phpj3/to-do-list/index.php');
}

if(isset($deleteform['task_id']) && !empty($deleteform['task_id'])) {
  $task_id = filter_input(INPUT_POST, 'task_id', FILTER_SANITIZE_NUMBER_INT);
  $task_id = clean($deleteform['task_id']);
}

$delete = $connection->prepare("DELETE FROM tasks WHERE id = :task_id");
$delete->bindParam(':task_id', $task_id);

$delete->execute();
$connection = null;

$handle = fopen('file.csv', 'r');
while($tasks = fgetcsv($handle)) {

}
//var_dump($tasks);
fclose($handle);


?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <a href="./"><h1>&#9830;To Do List</h1></a>
    </header>
    <main>
      <form class="ajouter" action="<?= htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
        <legend>Ajouter une nouvelle tache</legend>
        <fieldset>
          <p>
          <label for="title">Titre</label>
          <input id="title" type="text" name="title" value="">
          </p>
          <p>
          <label for="deadline">Deadline</label>
          <input id="deadline" type="date" name="deadline" value="">
          </p>
          <p>
            <label for="importance">Priorité</label>
            <select id="importance" name="importance" aria-label="choisissez une option" required>
              <option value="basse">basse</option>
              <option value="moyenne">moyenne</option>
              <option value="haute">haute</option>
            </select>
          </p>
          <p>
          <label for="description">Description</label>
          <textarea id="description" name="description"></textarea>
          </p>
        </fieldset>
        <button class="btn" type="submit" value="submit">Ajouter</button>
      </form>
      <section>
        <h2>Taches à venir</h2>
        <?php
          foreach ($results as $res) {
            echo '<ul>
            <li>' . $res['id'] . '</li>
            <li>' . $res['deadline'] . '</li>
            <li>' . $res['titre'] . '</li>
            <li>' . $res['description'] . '</li>
            <li>' . $res['priorite'] . '</li>
            <li>' . $res['statut'] . '</li>
            <li><a class="btn secondary" href="tasks/?task_id=' . $res['id'] . '">Editer</a></li>
            </ul>';
          }
          ?>

      </section>
      <form class="delete" action="<?= htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
        <legend>Supprimer une tache</legend>
        <fieldset>
          <p>
          <label for="task_id">id de la tache</label>
          <input id="task_id" type="number" name="task_id" value="">
          </p>
        </fieldset>
        <button class="btn" type="submit" value="delete">Supprimer</button>
      </form>
    </main>
  </body>
</html>
