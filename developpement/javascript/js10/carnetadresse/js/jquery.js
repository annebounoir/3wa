
$email = $('#email');
$lastname = $('#lastname');
$firstname = $('#firstname');
$mobile = $('#mobile');
$address = $('#address');

$addcontact = $('#addcontact');
$form = $('#form');
$submitBtn = $('#submitBtn');
$resetBtn = $('#resetBtn');
$section = $(".all-contacts");
$editState = false;


$('#addcontact').on('click', function(e) {
 e.preventDefault();
 $form.fadeToggle(1000);
});

function addNewContact() {

  $form.submit(function(e) {
    e.preventDefault();
    $newcontact = {
      "firstname": $firstname.val(),
      "lastname": $lastname.val(),
      "email": $email.val(),
      "mobile": $mobile.val(),
      "address": $address.val()
    }

    if (!$editState) {
      $contacts = getLocalStorage();
      $contacts.push($newcontact);
      localStorage.setItem('contact', JSON.stringify($contacts));

      // reinitialise le form;
      $form.trigger('reset');
      document.location.reload('http://localhost/developpement/javascript/js10/carnetadresse/');
    } else {
      editContactValues($newcontact);
    }
  });
}


function getLocalStorage() {
  let contacts = [];

  if( JSON.parse(localStorage.getItem('contact')) && JSON.parse(localStorage.getItem('contact')).length ) {
    contacts = JSON.parse(localStorage.getItem('contact'));
  }
  return contacts;
}

function afficherToutDansHTML() {
  $contactsToArray = getLocalStorage();
  for (let i = 0; i < $contactsToArray.length; i++) {
    $html = `
           <ul>
             <li>${$contactsToArray[i].firstname}</li>
             <li>${$contactsToArray[i].lastname}</li>
             <li>${$contactsToArray[i].email}</li>
             <li>${$contactsToArray[i].mobile}</li>
             <li>${$contactsToArray[i].address}</li>
             <li><button type="button" data-contact="${i}" name="supp"  class="suppcontact"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" name="edit" data-edit="${i}"  class="editcontact"><i class="fas fa-edit" aria-hidden="true"></i></button>
             </li>
           </ul>
         `;
    $section.append($html);
  }
}

function supprimerElement() {
  $deleteBtn = $('.suppcontact');
  $deleteBtn.on('click', function() {
    //selectionner tache par index du tableau
    $index = $(this).attr('data-contact');
    $contactsToArray = getLocalStorage();
    //supprimer du localStorage
    $contactsToArray.splice($index, 1);
    //remettre le tableau dans localStorage.
    localStorage.setItem('contact', JSON.stringify($contactsToArray));
    document.location.reload('http://localhost/developpement/javascript/js10/carnetadresse/');
  });
}

function editElement() {
  $editBtn = $('.editcontact');
  $editState = true;
  $editBtn.on('click', function() {
    //selectionner tache par index du tableau
    $index = $(this).attr('data-edit');

    $contactsToArray = getLocalStorage();
    $contact = $contactsToArray[$index];

    $firstname.attr('value', $contact.firstname);
    $lastname.attr('value',  $contact.lastname);
    $email.attr('value', $contact.email);
    $mobile.attr('value', $contact.mobile);
    $address.attr('value', $contact.address);
  });
}

function editContactValues($newcontact) {
     $contacts = getLocalStorage();
     $contacts[$index] = $newcontact;
     localStorage.setItem('contact', JSON.stringify($contacts));

     // reinitialise le form;
     $form.trigger('reset');
     document.location.reload('http://localhost/developpement/javascript/js10/carnetadresse/');
}


document.addEventListener('DOMContentLoaded', function() {
  addNewContact()
  afficherToutDansHTML();
  supprimerElement();
  editElement();
});
