<?php
include('database/connection.php');
include('helper/helper_functions.php');

$task_id = clean($_GET['task_id']);
if(isset($task_id) && !empty($task_id)) {
  $query = $connection->prepare('SELECT * FROM tasks WHERE id=' . $task_id );
  $query->execute();
  $task = $query->fetch(PDO::FETCH_ASSOC);
  $connection = null;
}
