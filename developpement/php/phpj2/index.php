<?php

function tirageNbr() {
   return rand ( 1 , 49 );
}


$loterie = [

];

for ($a = 1; $a <= 6; $a++)
  {
    $nombre = tirageNbr();
    var_dump($nombre);
      if (in_array ($nombre, $loterie)) {
        $nombre = tirageNbr();
      }
    array_push ($loterie, $nombre);

  }

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>tirage de la loterie</h1>
    <?php
    sort($loterie);
    foreach ($loterie as $nombre) {
      echo ('<p>' . $nombre . '</p>');
    }
    ?>
  </body>
</html>
