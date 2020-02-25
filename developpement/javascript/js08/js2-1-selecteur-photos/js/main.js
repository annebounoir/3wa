
'use strict';

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let ul = document.getElementById('photo-list');
let total = document.getElementById('total');
let em = total.firstElementChild;
let ulChild = ul.children;
//em.innerText = 0;
em.classList.add('nbrSelect');

for (let i = 0; i < ulChild.length; i++) {

  ulChild[i].addEventListener('click', function() {

    if (this.classList.contains('selected')) {
      em.innerText = document.querySelectorAll('.selected').length - 1;
      return this.classList.remove('selected');
    }
    this.classList.add('selected');
    em.innerText = document.querySelectorAll('.selected').length;

  });

  // ulChild[i].addEventListener('mouseenter', function() {
  //   this.classList.add('silver');
  // });
  //
  // ulChild[i].addEventListener('mouseout', function() {
  //   this.classList.remove('silver');
  // });

  let img = ulChild[i].firstElementChild;

  img.addEventListener('mouseenter', function() {
    ulChild[i].classList.add('silver');
  });

  img.addEventListener('mouseout', function() {
    ulChild[i].classList.remove('silver');
  });




}





/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


/*

rectangle.addEventListener('mouseenter', function() {
    rectangle.classList.add('important');
});

rectangle.addEventListener('mouseout', function() {
  rectangle.classList.remove('important');
});

*/


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*+
### Interactions

* Quand on clique sur un élément de la liste *photo-list*, l'élément en question se voit affecter la class *selected* et le message avec le nombre de photos sélectionnées se met à jour.

Un deuxième clic inverse l'opération.

## Détails

* Comme pour l'exercice Dragon Slayer, organiser le code en trois parties : les variables, les fonctions et enfin le code principal.
* Nommer correctement le gestionnaire d'évènements pour qu'il ait un sens.
*/
