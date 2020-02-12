// Receuillir les valeurs des input et du formulaire//


let formDonnees = document.querySelector('form');
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email= document.getElementById("email");
formDonnees.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(firstName + lastName + email);
});


// lien // Empêcher le chargement de le page //

function donnees(page){

    page.preventDefault();
    let firstName = document.querySelector("first-name");
    let lastName = document.querySelector("last-name");
    let email = document.querySelector("email");

}

//creer un objet et afficher ses propriétés avec des fonctions


let user = {
  name: 'Camille',
  age: 12,
  getNameEtAge: function() {
    return this.name + this.age;
  },
}

console.log(user.getNameEtAge())
