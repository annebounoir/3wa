<?php
$data = $_POST;

//var_dump($_POST['prenom']);
//var_dump($data['nom']);
//var_dump($data['email']);
$data['nom'];
$data['prenom'];
$data['email'];

$handle = fopen('file.txt', 'a');
fwrite ($handle , $data['nom'] . "\n" . $data['prenom'] . "\n" . $data['email'] . "\n");
//fwrite ($handle , $data['prenom'] . "\n");
//fwrite ($handle , $data['email'] . "\n");

?>

<form method="post" action="contact.php">
  <fieldset>
    <legend>Contactez-nous</legend>
    <div class="flex">
      <p class="field">
        <label for="nom"></label>
        <input type="text" id="nom" name="nom" value="" required placeholder="Votre nom">
      </p>
      <p class="field">
        <label for="prenom"></label>
        <input type="text" id="prenom" name="prenom" value="" required placeholder="Votre prénom">
      </p>
      <p class="field">
        <label for="email"></label>
        <input type="email" id="email" name="email" value="" required placeholder="Votre mail">
      </p>
    </div>
  </fieldset>
  <p>
    <input class="btn" type="submit" value="Valider">
  </p>
</form>
