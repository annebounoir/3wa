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

function generateNbrBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function lanceDeDes(nombreDes, nombreFaces) {
  let resultDes = 0;
  const min = 1;
  let max = nombreFaces;

  for (let i = 0; i < nombreDes; i++) {
    resultDes = resultDes + generateNbrBetween(min, nombreFaces);
  }
  return resultDes;
};

const nombreDesPlayer = 10;
const nombreFaces = 10;
const nombreDesDragon = 10;

const pvPlayer = lanceDeDes(nombreDesPlayer, nombreFaces);
player.pointsDeVie += pvPlayer;

const pvDragon = lanceDeDes(nombreDesDragon, nombreFaces);
dragon.pointsDeVie += pvDragon;

console.log(player.pointsDeVie)
console.log(dragon.pointsDeVie)


const html = `
<div class="game-state">
    <figure class="game-state_player">
        <img src="images/knight.png" alt="Chevalier">
        <figcaption>${player.pointsDeVie} PV</figcaption>
    </figure>
    <figure class="game-state_player">
        <img src="images/dragon.png" alt="Dragon">
        <figcaption>${dragon.pointsDeVie} PV</figcaption>
    </figure>
</div>
`;
document.write(html);

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
