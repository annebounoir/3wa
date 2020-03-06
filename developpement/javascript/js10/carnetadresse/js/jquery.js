
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

$('#addcontact').on('click', function(e) {
 e.preventDefault();
 $form.fadeToggle(1000);
});


function getLocalStorage() {
  let contacts = [];

  if( JSON.parse(localStorage.getItem('contact')) && JSON.parse(localStorage.getItem('contact')).length ) {
    contacts = JSON.parse(localStorage.getItem('contact'));
  }

  return contacts;
}



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
    gerenerHTML($newcontact);

  } else {
    editContactValues($newcontact);
  }
  // reinitialise le form;
  $form.trigger('reset');
});



function gerenerHTML(contact, i) {
  $html = `
         <ul data-contact="${i}">
           <li class="firstname">${contact.firstname}</li>
           <li class="lastname">${contact.lastname}</li>
           <li class="email">${contact.email}</li>
           <li class="mobile">${contact.mobile}</li>
           <li class="contact">${contact.address}</li>
           <li><button type="button" data-contact="${i}" name="supp"  class="suppcontact"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
              <button type="button" name="edit" data-edit="${i}"  class="editcontact"><i class="fas fa-edit" aria-hidden="true"></i></button>
           </li>
         </ul>
       `;
  $section.append($html);
}

function afficherToutDansHTML() {
  $contactsToArray = getLocalStorage();

  $contactsToArray.forEach(function(contact, i) {
    gerenerHTML(contact, i);
  });

}

function supprimerElement() {
  $deleteBtn = $('.suppcontact');
  $deleteBtn.on('click', function() {
    //selectionner tache par index du tableau
    $index = $(this).attr('data-contact');
    $contactsToArray = getLocalStorage();
    //supprimer du localStorage
    $contactsToArray.splice($index, 1);
    $(this).parent().parent().remove();
    localStorage.setItem('contact', JSON.stringify($contactsToArray));

  });
}

function editElement() {
  $editBtn = $('.editcontact');

  $editBtn.on('click', function() {
    $editState = true;
    //selectionner tache par index du tableau
    $index = $(this).attr('data-edit');

    $contactsToArray = getLocalStorage();
    $contact = $contactsToArray[$index];

    $firstname.attr('value', $contact.firstname);
    $lastname.attr('value',  $contact.lastname);
    $email.attr('value', $contact.email);
    $mobile.attr('value', $contact.mobile);
    $address.attr('value', $contact.address);
    $form.attr('data-contact', $index);

  });
}

function editContactValues($newcontact) {
     $contacts = getLocalStorage();
     $index = $form.attr('data-contact');
     $contacts[$index] = $newcontact;
     localStorage.setItem('contact', JSON.stringify($contacts));

     let allEditBtn = Array.from(document.getElementsByClassName('editcontact'));

     allEditBtn.forEach(function(btn) {
       if(btn.getAttribute('data-edit') == $index) {
         $(btn).parent().parent().remove();
       }
     });

     gerenerHTML($newcontact, $index);

     editElement();
     supprimerElement();
     $form.trigger('reset');

     $editState = false;
}


document.addEventListener('DOMContentLoaded', function() {
  afficherToutDansHTML();
  editElement()
  supprimerElement();
  $editState = false;
});
