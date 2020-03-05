<?php

include('../database/connection.php');
include('../helper/helper_functions.php');

//delete task
if(isset($_POST['task_id']) && !empty($_POST['task_id'])) {
  $deletebutton = $_POST;
  $task_id = clean($deletebutton['task_id']);
  $delete = $connection->prepare('DELETE FROM tasks WHERE id= :task_id');
  $delete->bindParam(':task_id', $task_id);
  $delete->execute();
  $connection = null;
  header('Location:http://localhost/developpement/php/phpj3/to-do-list/');
}
