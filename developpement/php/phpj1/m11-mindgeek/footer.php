    <footer>
      <nav class="nav flex container">
        <?php
        $footernav = [
        "./index.html" => 'accueil',
        "./serveur-mutualise.html" => 'Serveur Mutualisé',
        "./serveur-dedie.html" => 'Serveur dedié',
        "./cloud.html" => 'Solution "Cloud"',
        "./contact.php" => 'contact',
        "./connexion.html" => 'se connecter',
        ];

        foreach ($footernav as $href => $link) {
          echo '<a href="' . $href . '" class="footer_link">' . $link . '</a>';
        };
        ?>
      </nav>
      <div class="container">
        <a href="#"><img src="img/3wa.png" alt="Logo 3w Academy"></a>
        <p><strong>3W Academy - Formation Développeur WEB - Tous droits réservés.</strong></p>
        <p> Cet exercice est mis à dispostion des stagiaires dans le cadre exclusif de leur apprentissage.
        Nous remercions les auteurs de ces photos récoltées sur Pixabay.</p>
      </div>
    </footer>
  </body>
</html>
