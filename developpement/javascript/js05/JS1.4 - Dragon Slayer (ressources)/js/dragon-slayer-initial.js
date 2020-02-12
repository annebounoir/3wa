'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

const player = {
  pointsDeVie : 100,
  initiative: 0,
};

const dragon = {
  pointsDeVie : 100,
  initiative : 0,
};

// CHOIX DIFFICULTE DE JEU
let difficulte = 0;
do {
 difficulte = prompt("choississez la difficulté : facile, normal ou difficile").toLowerCase();
}
while (difficulte != 'facile' && difficulte != 'normal' && difficulte != 'difficile' );

// DES de jeu
let nombreDesPlayer = 0;
let nombreFaces = 0;
let nombreDesDragon = 0;

// Dommage MAJ ou MIN Dommage Attaque
let nombreDesNiveauM = 0;
const nombreFacesNiveauM = 6;
let pourcentage = 0;
let lanceDeDesNiveauM = 0;

if (difficulte === 'facile') {
  // DES Points de Vie facile
   nombreDesPlayer = 10;
   nombreFaces = 10;
   nombreDesDragon = 5;
   // DES Maj ou Min Dommages facile
   nombreDesNiveauM = 2;
}
else if (difficulte === 'difficile'){
  // DES Points de Vie Diffcile
   nombreDesPlayer = 7;
   nombreFaces = 10;
   nombreDesDragon = 10;
   // DES Maj ou Min Dommages Difficile
   nombreDesNiveauM = 1;
}
else {
  // DES Points de Vie normal
   nombreDesPlayer = 10;
   nombreFaces = 10;
   nombreDesDragon = 10;
}

console.log(`${difficulte}`);
console.log(`Des du Dragon ${nombreDesDragon}`);
console.log(`Des du joueur ${nombreDesPlayer}`);
console.log(`Des de MiveauM ${nombreDesNiveauM}`);


// Fonction LANCER LES DES
function generateNbrBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function lanceDeDes(nombreDes, nombreFaces) {
  let resultDes = 0;
  const MIN = 1;
  let max = nombreFaces;

  for (let i = 0; i < nombreDes; i++) {
    resultDes = resultDes + generateNbrBetween(MIN, nombreFaces);
  }
  return resultDes;
};


// DES Points de Vie

const pvPlayer = lanceDeDes(nombreDesPlayer, nombreFaces);
player.pointsDeVie += pvPlayer;

const pvDragon = lanceDeDes(nombreDesDragon, nombreFaces);
dragon.pointsDeVie += pvDragon;

console.log(`Player PV = ${player.pointsDeVie}`);
console.log(`Dragon PV = ${dragon.pointsDeVie}`);


/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

// DES initiative
const nombreDesInitiative = 10;
const nombreFacesInitiative = 6;

function initiative() {
  dragon.initiative = lanceDeDes(nombreDesInitiative, nombreFacesInitiative);
  player.initiative = lanceDeDes(nombreDesInitiative, nombreFacesInitiative);

  return {
    dragon,
    player,
  }
}
initiative();

/*
function niveauM (difficulte) {
  lanceDeDesNiveauM = lanceDeDes(nombreDesNiveauM, nombreFacesNiveauM);
  pourcentage = Math.floor(attaque * lanceDeDesNiveauM / 100);
  if (difficulte == 'difficile' ) {
    player.pointsDeVie = player.pointDeVie - (attaque + pourcentage) || dragon.pointDeVie = dragon.pointDeVie - (attaque - pourcentage);
  }
  else if{
    (difficulte == 'facile' ) {
      dragon.pointsDeVie = dragon.pointsDeVie - (attaque + pourcentage)
      || player.pointDeVie = player.pointsDeVie - (attaque - pourcentage);
  }
  else {

  }
};
*/

// DES attaque
const nombreDesAttaque = 3;
const nombreFacesAttaque = 6;
let attaque = 0;

function play() {
  if (player.initiative > dragon.initiative) {
    attaque = lanceDeDes(nombreDesAttaque, nombreFacesAttaque);
    dragon.pointsDeVie = dragon.pointsDeVie - attaque;

  }
  else if (dragon.initiative === player.initiative) {

  }
  else {
    attaque = lanceDeDes(nombreDesAttaque, nombreFacesAttaque);;
    player.pointsDeVie = player.pointsDeVie - attaque;
  };
  console.log(`Player initiative = ${player.initiative}`);
  console.log(`Dragon initiative = ${dragon.initiative}`);
  console.log(`les dommages sont de ${attaque}`);
  console.log(`Player PV = ${player.pointsDeVie}`);
  console.log(`Dragon PV = ${dragon.pointsDeVie}`);
  console.log(`pourcentage = ${lanceDeDesNiveauM}%`);
  initiative();
};


let round = 0;
  while (dragon.pointsDeVie > 0 && player.pointsDeVie > 0) {
    play();
    round++;
  }

/*
if (player.pointsDeVie > 0 {
  document.write(``)
} */

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
