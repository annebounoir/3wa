
<?php



$test = 'test'; //declarer une variable avec $

define('CAR', 'Volvo'); //declarer une constante
const CAR2 = 'Jeep'; //daclater une constante v2

echo $test; // afficher variable dans la page
echo CAR; // afficher constante

$array = ['test', 'test1', 'test2', true, 1, 2.58]; //tableau v1
$array2 = array('test', 12, 'test2'); //tableau v2

/*
echo '<pre>'; // mettre en forme l'affichage de var_dump
var_dump($array); //afficher tableau (mode débugage) */

echo '<p>' . $test . '</p>';

for ($i=0; $i < 10; $i++) {
  echo '<p>' . $i . '</p>';
}

echo '<ul>';
foreach ($array as $element) {
  echo '<li>' . $element . '</li>';
}
echo '</ul>';

?>



<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
      <ul>
      </ul>
      <p>
        <?php echo $test; ?>
      </p>
  </body>
</html>
