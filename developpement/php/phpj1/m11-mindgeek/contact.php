<?php require("head.php"); ?>

  <!-- HEADER -->
  <?php require("header.php"); ?>

  <!-- MAIN -->
    <main class="container">

      <form method="post" action="contact.html">
        <fieldset>
          <legend>Contactez-nous</legend>
          <div class="flex">
            <p class="field">
              <label for="first-name"></label>
              <input type="text" id="first-name" name="prenom" value="" required placeholder="Votre prénom">
            </p>
            <p class="field">
              <label for="email"></label>
              <input type="email" id="email" name="email" value="" required placeholder="Votre mail">
            </p>
            <p class="field">
              <label for="message"></label>
              <textarea type="text" id="message" name="message" rows="1" required placeholder="Votre message"></textarea>
            </p>
          </div>
        </fieldset>
        <p>
          <input class="btn" type="submit" value="Valider">
        </p>
      </form>

    </main>

  <!-- FOOTER -->
  <?php require('footer.php'); ?>
