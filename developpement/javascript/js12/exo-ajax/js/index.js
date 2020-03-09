
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();


  $form = $('form').serializeArray();

  let url = 'php/htmlcontent.php';

  if ($form[0].value == 'json') {
    url = 'php/json.php';
    // result = json
  }

  if($form[0].value == 'films') {
    url = 'php/films.php';
    // result = blabla;
  }

  $.ajax({
    type: 'GET',
    url: url,
    success: function(data) {
      document.getElementById('response').innerHTML = data;
    }
  });

});

function JSONtoHTML() {
  $jsonlist =
  `<p> ${data.prenom} </p>
  <p> ${data.nom} </p>
  <p> ${data.email} </p>`
}
