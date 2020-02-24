<?php

include('../connection.php');

$task_id = clean($_GET['task_id']);
if(isset($task_id) && !empty($task_id)) {
  $query = $connection->prepare('SELECT * FROM tasks WHERE id=' . $task_id );
  $query->execute();
  $task = $query->fetch(PDO::FETCH_ASSOC);
  $connection = null;
}

/*
if(isset($_POST['task_id']) && !empty($_POST['task_id'])) {
  $post = $_POST;
  $task_id = clean($post['task_id']);
  $delete = $connection->prepare('DELETE FROM tasks WHERE id= :id ');
  $delete->bindParam(':id', $task_id);
  $delete->execute();
  header('Location:http://localhost/developpement/php/phpj3/to-do-list/');
}*/

if(isset($_POST['task_id']) && !empty($_POST['task_id'])) {
  $deletebutton = $_POST;
  $task_id = clean($deletebutton['task_id']);
  $delete = $connection->prepare('DELETE FROM tasks WHERE id= ' . $task_id);
  $delete->execute();
  $connection = null;
  header('Location:http://localhost/developpement/php/phpj3/to-do-list/');
}

?>


<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>To Do List | <?= $task['titre'] ?></title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <header>
      <a href="../index.php"><h1>&#9830;To Do List</h1></a>
    </header>
    <main>
      <section class="edit"> <?=
        '<h2>' . $task['titre'] . '</h2>
        <p>' . $task['deadline'] . '</p>
        <p>' . $task['description'] . '</p>
        <p>' . $task['priorite'] . '</p>
        <p>' . $task['statut'] . '</p>
        </p>';
        ?>
      <form class="trans" method="post" action="<?= htmlentities($_SERVER['PHP_SELF'])?>">
      <button class="btn" type="submit" name="task_id" value="<?php echo $task['id'] ?>">Supprimer</button>
      </form>
      </section>
    </main>
  </body>
</html>
