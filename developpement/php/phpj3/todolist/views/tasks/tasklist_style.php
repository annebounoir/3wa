<ul>
  <li><?= $task['id'] ?></li>
  <li><?= $task['deadline'] ?></li>
  <li><?= $task['titre'] ?></li>
  <li><?= $task['description'] ?></li>
  <li><?= $task['priorite'] ?></li>
  <li><?= $task['statut'] ?></li>
  <li><a class="btn secondary" href="?task_id=<?=$task['id'] ?>">Editer</a></li>
</ul>
