
$email = $('#email');
$lastname = $('#lastname');
$firstname = $('#firstname');


// $email.hide();

// $email.fadeOut();
// $email.fadeOut('slow');
// $email.fadeOut('fast');
// $email.fadeOut(5000);

// $email.fadeIn();

// $email.fadeToggle();

//firstname.value; (en JS pur)

$firstname.val(); //( en jquery)
//$('#lastname').fadeOut(2000).fadeIn(3000); // sans déclarer la variable

// methode 1
// $('#submitBtn').click(function() {
// });

//Methode 2 - cette methode est mieux
/*
$('#submitBtn').on('click', function(e) {
 e.preventDefault();
 console.log($lastname.val());
 console.log($firstname.val());
 console.log($email.val());
  $('#lastname').fadeOut(2000).fadeIn(3000);
});
*/


$('#submitBtn').on('click', function(e) {
 e.preventDefault();
 console.log(this); //js
 console.log($(this)); //jquery
 console.log(e.target); //js
 console.log(e.target.getAttribute('type')); //js
 console.log(this.getAttribute('type')); //js
 console.log(e.target.attr('type')); //js
 console.log($(e.target).attr('type')); //jquery
 console.log($(this).attr('type')); // HYBRIDE NOPE



 // attribute = 'data-customname' pour customiser les attributs dans le html
 console.log(this.setAtrribute('class', 'show')); // js
 console.log($(this).attr('class', 'show')); //Jquery
});
