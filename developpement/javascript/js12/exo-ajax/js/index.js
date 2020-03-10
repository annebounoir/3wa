
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();


  $form = $('form').serializeArray();
  $value = $form[0].value;

  let url = 'php/htmlcontent.php';

  if ($value == 'json') {
    url = 'php/json.php';
  }

  if($value == 'films') {
    url = 'php/films.php';
  }

  $.ajax({
    type: 'GET',
    url: url,
    success: function(data) {
      cadependedecequonvafaire($value, data);
    }
  });
});


function cadependedecequonvafaire(value, data) {

  if (value == 'json') {
    $jsonlist =
    `<p> ${data.prenom} </p>
    <p> ${data.nom} </p>
    <p> ${data.email} </p>
    <p> ${data.adresse} </p>`;
    return document.getElementById('response').innerHTML = $jsonlist;
  }

  return document.getElementById('response').innerHTML = data;
}
