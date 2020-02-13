// Receuillir les valeurs des input et du formulaire//

let formDonnees = document.querySelector('form');
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email= document.getElementById("email");
formDonnees.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
});

// lien //

let link = document.querySelector('a');
link.addEventListener("click", function(event) {
  event.preventDefault();
});

//creer un objet et afficher ses propriétés avec des fonctions

let user = {
  name: 'Camille',
  age: 12,
  getNameEtAge: function() {
    return this.name + this.age;
  },
}

console.log(user.getNameEtAge())
