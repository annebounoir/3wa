'use strict';   // Mode strict du JavaScript

/*
JS1.2 - Chifoumi
Énoncé

L'utilisateur saisit le mot pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !
Détails

    Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.

Rappels

    Si le joueur et l'ordinateur font le même choix on obtient une égalité.
    Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
    La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
    La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).

Modifié le: jeudi 10 août 2017, 15:46
*/


// utilisateur
let playerRep = prompt("Entrez pierre, feuille ou ciseaux :");
if (playerRep != "pierre" && playerRep != "feuille" && playerRep != "ciseau") {
  alert("Valeur impossible. Rechargez la page et entrez pierre, feuille ou ciseaux")
}

// ordinateur
let max = 4;
let min = 1;
let ordi = Math.floor(Math.random() * (max - min +1) + min);

// convertir
if (ordi == 1) {
  ordi = "pierre";
}
else if (ordi == 2) {
  ordi = "feuille";
}
else {
  ordi = "ciseau";
}

// comparer
if (playerRep == ordi) {
  document.write(`<p>ordi a choisi ${ordi}</p> égalité`)
}
else if ( (playerRep == "pierre" && ordi == "ciseau") || (playerRep == "feuille" && ordi == "pierre") || (playerRep == "ciseau" && ordi == "feuille") ) {
  document.write(`<p>ordi a choisi ${ordi}</p> WINNER`)
}
else {
  document.write(`<p>ordi a choisi ${ordi}</p> LOOSER`)
}
/*

si
pierre == pierre(0)
ciseau == ciseau(3)
feuille == feuille(2)
affiche Egalité

si
pierre < ciseau OK
feuille < ciseau
ciseau < feuille
affiche WIN

si
pierre > ciseau
feuille > ciseau
ciseau > feuille
affiche LOOSE

*/
