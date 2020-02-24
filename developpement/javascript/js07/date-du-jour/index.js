'use strict';   // Mode strict du JavaScript

let date = new Date();


let jour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
let mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];


console.log(jour[date.getDay()]);
console.log(date.getDate());
console.log(mois[date.getMonth()]);
console.log(date.getFullYear());
