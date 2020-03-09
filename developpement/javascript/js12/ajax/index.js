// METHODE GET
/*******************************************************************

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let xhttp = new XMLHttpRequest();

  let prenom = document.querySelector("#prenom").value;
  let nom = document.querySelector("#nom").value;

  const data = {
    nom: nom,
    prenom: prenom,
  };

  xhttp.open('GET', 'getjson.php?query=' + data.prenom, true);

  xhttp.onreadystatechange = function() {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(xhttp.response);

      document.getElementById('response').innerHTML = response.results.status + ' ' + response.results.prenom;
    }
  };

  xhttp.send();
});




// METHODE POST ////////////////////////////////////////////////////////


document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let xhttp = new XMLHttpRequest();

  const form = document.querySelector('form');
  const formData = new FormData(form);
  console.log(formData);


  xhttp.open('POST', 'postjson.php');
  xhttp.send(formData);

  xhttp.onreadystatechange = function() {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(xhttp.response);

      document.getElementById('response').innerHTML = response.results.status;
    }
  };

});


// METHODE GET JQUERY ///////////////////////////////////////////////

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let prenom = document.querySelector("#prenom").value;
  let nom = document.querySelector("#nom").value;

  const data = {
    nom: nom,
    prenom: prenom,
  };

  //Exemple > $.get(url, params, function(data) { });

  $.get(
    'getjson.php',
    {
      query: data.prenom,
    },
    function(data) {
      document.getElementById('response').innerHTML = data.results.status;
    }
  );
});



// METHODE POST  Jquery  ///////////////////////////////////////////////////


document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let prenom = document.querySelector("#prenom").value;
  let nom = document.querySelector("#nom").value;

  const data = {
    nom: nom,
    prenom: prenom,
  };

  $.post(
    {
      url: 'postjson.php',
      data: data,
    },
    function(data) {
      document.getElementById('response').innerHTML = data.results.status;
    }
  );
});



document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let prenom = document.querySelector("#prenom").value;
  let nom = document.querySelector("#nom").value;

  const data = {
    nom: nom,
    prenom: prenom,
  };

  $.ajax( {
    type: 'POST',
    url:'postjson.php',
    data: data,
    success: function(data) {
      document.getElementById('response').innerHTML = data.results.status;
    }

  });

});

********************************************************************/





document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let prenom = document.querySelector("#prenom").value;
  let nom = document.querySelector("#nom").value;

  const data = {
    nom: nom,
    prenom: prenom,
  };

  $.ajax({
    type: 'GET',
    url:'getjson.php',
    data: 'query=' + data.prenom,

    success: function(data) {
      document.getElementById('response').innerHTML = data.results.status;
    }

  });



});
