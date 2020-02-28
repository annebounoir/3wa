'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let btn = document.getElementById('firing-button');
let resetBtn = document.getElementById('reset-button');
let billboard = document.getElementById('billboard');
let rocket = document.getElementById('rocket');
let body = document.querySelector('body');

let date = new Date();
let compteur = 10;

billboard.firstElementChild.innerText = compteur;

btn.addEventListener('click', function() {
    rocket.src="images/rocket2.gif";
    let seconds = setInterval(function () {
      compteur--;
      btn.classList.add('disabled');
      billboard.firstElementChild.innerText = compteur;

      if (compteur === 0) {
        rocket.src="images/rocket3.gif";
        rocket.classList.add('tookOff');
        clearInterval(seconds);
      }
    }, 1000);
});

function nbrRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function convertir(div, nbr) {
  if (nbr === 1) {
    div.classList.add('tiny');
  }
  else if (nbr === 2) {
    div.classList.add('big');
  }
  else {
    div.classList.add('normal');
  }
}

function addClassToStar(div) {
  let classNbr = nbrRandom(4, 1);
  convertir(div, classNbr);
}


function positionAleatoire(item) {
  item.style.left = nbrRandom(window.innerWidth, 0) + 'px';
  item.style.top = nbrRandom(window.innerHeight, 0) + 'px';
}


function newStar() {
  let star = document.createElement('div');
  star.classList.add('star');
  addClassToStar(star);
  positionAleatoire(star);
  body.append(star);
}

for (var i = 0; i < 150; i++) {
 newStar();
}


/*
for (let i = 0; i < ulChild.length; i++) {

  ulChild[i].addEventListener('click', function() {

    if (this.classList.contains('selected')) {
      em.innerText = document.querySelectorAll('.selected').length - 1;
      return this.classList.remove('selected');
    }
    this.classList.add('selected');
    em.innerText = document.querySelectorAll('.selected').length;

  });
  */

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
