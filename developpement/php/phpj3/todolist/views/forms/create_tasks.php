<form class="ajouter" action="<?= $action ?>" method="post">
  <legend> <?= isset($task) ? 'Editer la tache' : 'Ajouter une nouvelle tache' ?> </legend>
  <fieldset>
    <p>
    <label for="title">Titre</label>
    <input id="title" type="text" name="title" value="<?= isset($task) ? $task['titre'] : '' ?>">
    </p>
    <p>
    <label for="deadline">Deadline</label>
    <input id="deadline" type="date" name="deadline" value="<?= isset($task) ? $task['deadline'] : '' ?>">
    </p>
    <p>
      <label for="importance">Priorité</label>
      <select id="importance" name="importance" aria-label="choisissez une option" placeholder="<?= isset($task) ? $task['priorite'] : 'choisir' ?>" required>
        <option value="basse">basse</option>
        <option value="moyenne">moyenne</option>
        <option value="haute">haute</option>
      </select>
    </p>
    <p>
    <label for="description">Description</label>
    <textarea id="description" name="description" value="<?= isset($task) ? $task['description'] : '' ?>"></textarea>
    </p>
  </fieldset>
  <input type="hidden" name="task_id" value="<?= isset($task) ? $task['id'] : '' ?>">
  <button class="btn" type="submit" value="submit">Ajouter</button>
  <?php if(array_key_exists('task_id', $_GET)) : ?>
    <button class="btn" type="submit" value="delete">Supprimer</button>
  <?php endif; ?>
</form>
