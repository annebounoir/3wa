/* JS1.1 - Objet Voiture
Énoncé

Créer puis afficher en HTML un objet représentant une voiture :

    La marque de la voiture
    Son année de fabrication
    Sa date d'achat
    La liste des passagers (au moins 2), avec le prénom de chacun des passagers

Détails

    Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
    On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères à la création d'une instance de la classe Date :


    // Représente la date du 5 avril 2014, format américain YYYY-MM-DD.
    var myBirthday = new Date('2014-04-05');


Rappels

    On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...

Modifié le: jeudi 10 août 2017, 14:30 */

let year = new Date ("2008-02-22");
let date = new Date ("2014-04-13");
let marque = "Volvo";

let voiture = {
  marque: marque,
  year: year,
  date: date,
  passagers: ["Pierre", "Paul", "Jacques"]
}

document.write("<ul>");
document.write(`<li>${voiture.marque}</li>`);
document.write(`<li>${voiture.year}</li>`);
document.write(`<li>${voiture.date}</li>`);
document.write(`<li>${voiture.passagers[2]}</li>`);
document.write(`<li>Nous sommes ${voiture.passagers.length} passagers</li>`);
document.write("<li>" + "Nous sommes " + voiture.passagers.length + " passagers" + "</li>");
document.write("</ul>");


document.write(
  `<ul>
  <li>${voiture.marque}</li>
  <li>${voiture.year}</li>
  <li>${voiture.date}</li>
  <li>${voiture.passagers[2]}</li>
  </ul>`
);


/* échapper les caractères:
let phrase3 = 'j\'étais la !;
let phrase4 = "je cite \"citation\" ";


let voiture = {
	marque: "renault",
    passagers: []
}


 opérateurs de comparaison
- >
- <
- >=
- <=
- !=
- !==
- ==
- ===

*/

let one = "45";
let two = 45;
console.log(one == two);
console.log(one === two);

// opérateurs "ou" et "et"
// ||
// &&

// if statement.

const ageMini = 20;
const ageClient = 30;

if(ageMini <= ageClient) {
  console.log('Entrez');
}

else {
	console.log('Sortez');
}


// if else if
if(ageMini < ageClient) {
	console.log('Entrez');
}
else if ( ageClient >= ageMini ) {
  console.log('Entrez');
}
else {
  console.log('NOPE');
}
