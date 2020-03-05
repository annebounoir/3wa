<h2>Taches à venir</h2>
<?php
include('requests/getalltasks.php');
  foreach($tasks as $task) {
      include('views/tasks/tasklist_style.php');
  }
