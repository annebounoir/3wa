<section class="flex">
<?php foreach($films as $film) : ?>
  <article>
    <h2><?= $film['title'] ?></h2>
    <img src="<?= $film['image'] ?>" alt="<?= $film['title'] ?>">
    <p><?= $film['body'] ?></p>
  </article>
<?php endforeach ?>
</section>
