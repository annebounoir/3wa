<header class="banner flex">
  <a class="banner_logo" href="./"><img src="img/logo.png" alt="Mind Geek"></a>
  <nav class="nav flex">
    <?php
    $nav = [
    "./serveur-mutualise.html" => '<i class="fas fa-users" aria-hidden="true"></i> Serveur Mutualisé',
    "./serveur-dedie.html" => '<i class="fas fa-user" aria-hidden="true"></i> Serveur dedié',
    "./cloud.html" => '<i class="fas fa-cloud" aria-hidden="true"></i>Solution "Cloud"',
    "./contact.php" => '<i class="fas fa-envelope" aria-hidden="true"></i>contact'];

    foreach ($nav as $href => $link) {
      echo '<a href="' . $href . '" class="banner_link">' . $link . '</a>';
    };
    ?>
  </nav>
  <div class="banner_intro">
    <h1>L'hébergement à prix libre</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <form method="get" class="banner_form">
    <input type="search" id="search" name="search"
       aria-label="que cherchez-vous ?" placeholder="Que cherchez-vous ?">
    <button type="submit">Search</button>
  </form>
</header>
