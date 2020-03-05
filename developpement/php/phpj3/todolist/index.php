<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>TO DO LIST</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <a href="./"><h1>&#9830;To Do List</h1></a>
    </header>
    <main>
      <section>
        <?php if(array_key_exists('task_id', $_GET)) : ?>
          <?php
            $action = 'updateTask';
            include('views/tasks/view_onetask.php');
            include('views/forms/create_tasks.php');
          ?>
        <?php else : ?>
          <?php
            $action = 'create';
            include('views/forms/create_tasks.php');
            include('views/includes/view_alltasks.php');
          ?>
        <?php endif ?>
      </section>
    </main>
  </body>
</html>
