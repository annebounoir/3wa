'use strict';   // Mode strict du JavaScript

let user = parseFloat(prompt("entrez un nombre"));
while (isNaN(user)) {
  user = parseFloat(prompt("merci d'entrer un nombre"));
}
document.write(user);
