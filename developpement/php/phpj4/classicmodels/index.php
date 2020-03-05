<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Classic Models</title>
     <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <a href="./"><h1>Classic Models</h1><a/>
    </header>
    <main>
      <?php if(array_key_exists('order', $_GET)) : ?>
        <?php
          include('views/orders/view_order_details.php');
        ?>
      <?php else : ?>
        <?php
          include('views/orders/view_orders_list.php');
        ?>
      <?php endif ?>
    </main>
  </body>
</html>
