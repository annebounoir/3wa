<?php

function tirageNbr($nombres = [], $a = 1) {
  for ($a; $a <= 6; $a++) {
     $nombre = rand ( 1 , 49 );
     if (in_array ($nombres, $nombre)) {
       return tirageNbr($nombres, $a);
     }

  $nombres[] = $nombre;
  }
  return $nombres;
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
    sort($nombres);
    foreach ($nombres as $nombre) {
      echo ('<p>' . $nombre . '</p>');
    }
    ?>
  </body>
</html>
