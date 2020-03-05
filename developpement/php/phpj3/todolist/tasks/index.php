<?php

include('../connection.php');

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
