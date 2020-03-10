<!DOCTYPE html>
<html lang="fr">
  <head>
    <head>
      <meta charset="utf-8">
      <title>Cup of Tea | Home</title>
      <meta name="description" content="Bienvenue sur votre boutique de thé en ligne">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/normalize.css">
      <link rel="stylesheet" href="css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Amaranth&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="css/style.css" media="screen">
    </head>
  </head>
  <body>
  <!-- HEADER -->
    <?php include('php/header.php'); ?>
  <!-- MAIN -->
    <main class="container">

      <!-- MAIN HEADER PROMO -->
      <header class="promo-header">
        <h1>C'est Noël, profitez-en !</h1>
        <img src="img/offre-noel.jpg" alt="promo de Noël">
        <p><small>Pour toute commande effectuée avant le 20 décembre</small></p>
        <div class="slider">
          <a href="#" class="slider-link active"><img src="img/slider/1.jpg" alt="Découvrez la boutique de Noël">
          <a href="#" class="slider-link"><img src="img/slider/2.jpg" alt="Les Thés de Noël">
          </a>
        </div>
      </header>

      <!-- SECTION 1 -->
      <section class="flex-categorie">
        <h2 class="basis100">Choississez votre thé</h2>
        <article class="categorie">
          <h3>Thé Noir</h3>
          <img src="img/tea/1.jpg" alt="thé noir">
        </article>
        <article class="categorie">
          <h3>Thé Noir</h3>
          <img src="img/tea/1.jpg" alt="thé noir">
        </article>
        <article class="categorie">
          <h3>Thé Noir</h3>
          <img src="img/tea/1.jpg" alt="thé noir">
        </article>
        <article class="categorie">
          <h3>Thé Noir</h3>
          <img src="img/tea/1.jpg" alt="thé noir">
        </article>
        <article class="categorie">
          <h3>Thé Noir</h3>
          <img src="img/tea/1.jpg" alt="thé noir">
        </article>
      </section>

      <!-- SECTION 2 -->
      <div class="section flex">

        <!-- ARTICLE 1 -->
        <article>
          <h2>Notre nouveauté</h2>
          <img src="img/product/product2.jpg" alt="thé noir">
          <h3>Thé du hammam</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>à partir de <strong class="block">8,50€</strong></p>
          <a class="btn">voir ce produit</a>
        </article>

        <!-- ARTICLE 2 -->
        <article>
          <h2>Notre nouveauté</h2>
          <img src="img/product/product2.jpg" alt="thé noir">
          <h3>Thé du hammam</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>à partir de <strong class="block">8,50€</strong></p>
          <a class="btn">voir ce produit</a>
        </article>

        <!-- ARTICLE 3-->
        <article>
          <h2>Notre nouveauté</h2>
          <img src="img/product/product2.jpg" alt="thé noir">
          <h3>Thé du hammam</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>à partir de <strong class="block">8,50€</strong></p>
          <a class="btn">voir ce produit</a>
        </article>
      </div>
    </main>
  <!-- FOOTER -->
    <?php include('php/footer.php'); ?>
  </body>
</html>
