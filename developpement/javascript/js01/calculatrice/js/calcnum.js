'use strict';   // Mode strict du JavaScript

/*
JS1.2 - Calculatrice Numérique
Énoncé

L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

Les opérations mathématiques acceptées sont :

    L'addition : a + b
    La soustraction : a - b
    La multiplication : a * b
    La division : a / b
    La puissance : a ^ b (exemple : 3 ^ 2 = 9)

Détails

    Il faut afficher une erreur en cas d'opération mathématique inconnue.
    Les nombres saisis peuvent être à virgule.
    L'utilisateur doit pouvoir autant saisir le nom de l'opération que l'opérateur correspondant : + - * / ^
    Il faut répéter le moins de code possible, notamment le code d'affichage du résultat.

Rappels

    La division par zéro n'existe pas, il faut donc gérer ce cas...

*/


let result;

let a = parseFloat(prompt("entrez un nombre"));
let operateur = prompt("entrez votre opération");
let b = parseFloat(prompt("entrez un nombre"));

if(isNaN(a) || isNaN(b)) {
  document.write("ceci n'est pas un nombre");
}

switch (operateur) {
  case "+" :
  case "addition" :
  case "plus":
  result = a + b;
  break;

  case "-" :
  case "soustraction":
  case "moins":
  result = a - b;
  break;

  case "*" :
  case "multiplication":
  result = a * b;
  break;

  case "/" :
  case "division":
  result = a / b;
  break;

  case "^" :
  case "puissance":
  result = a ** b;
  break;

  default: document.write("NOPE");
}

if((b == 0 && operateur == "/") || (b == 0 && operateur == "division")) {
  document.write("NOPE TOUJOURS PAS")
}
else {
  document.write(`mon resultat est ${result}`)
}
