<?php
$form = $_POST;


function clean($data) {
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;
}

if(isset($form['word']) && !empty($form['word'])) {
  $word = clean($form['word']);
}

if(isset($form['lang']) && !empty($form['lang'])) {
  $lang = clean($form['lang']);
}

$equival = [
  "hello" => "bonjour",
  "hour" => "heure",
  "day" => "jour",
  "cup" => "tasse",
  "hair" => "cheveux",
  "pen" => "stylo",
  "card" => "carte",
];

function translate($word, $lang, $equival) {
  if ($lang == 'enVerFr' && array_key_exists($word, $equival)) {
        return $equival[$word];
      }
  else if ( in_array($word, $equival)) {
        return array_search($word, $equival);
      }
   else {
      return "Nope, ne faite pas ça";
   }
}

?>



<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Traducteur</h1>
    <form action="<?= htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
      <fieldset>
        <p>
        <label for="word">entrez un mot</label>
        <input id="word" type="text" name="word" value="">
        </p>
        <p>
          <select name="lang" aria-label="choisissez une option" required>
            <option value="enVerFr">En > Fr</option>
            <option value="frVerEn">Fr > En</option>
          </select>
        </p>
      </fieldset>
      <button type="submit" value="submit">traduire</button>
    </form>
    <p>
    <?php echo translate($word, $lang, $equival); ?>
    </p>

  </body>
</html>
