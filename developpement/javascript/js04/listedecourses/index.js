'use strict';


/*
    La liste de courses est stockée dans une seule variable.
    Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
    Les fonctionnalités de gestion de la liste de courses sont :
        Ajouter un produit par son nom
        Supprimer un produit ayant un nom spécifique
        Supprimer tous les produits
        Afficher la taille et le contenu de la liste
    Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
    Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
    Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
        Ajouter 4 produits simples puis afficher les informations
        Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
        Supprimer tous les produits puis afficher les informations
*/


const listeCourses = [];
const listeFilmVoir = [];

function ajouterProduit(liste, produit) {
  liste.push(produit.toLowerCase());
}

ajouterProduit(listeCourses, 'haricots');
ajouterProduit(listeCourses, 'salade');
ajouterProduit(listeCourses, 'mouchoirs');

/*
function supprimerProduit(produit) {
  for (let i = 0; i < listeCourses.length; i++) {
    if (listeCourses[i] === produit) {
      listeCourses.splice(i, 1)
    }
  }
}
// supprimerProduit('salade');
// supprimerProduit('haricots');
// supprimerProduit('mouchoirs');
*/

function supprimerProduit(liste, produit) {
  let index = liste.indexOf(produit.toLowerCase());

  if (index == -1) {
    return
  }

  liste.splice(index, 1);
}

function supprimerTout(liste) {
  liste.length = 0;
}
// supprimerTout();

function voirListe(liste) {
  document.write('<ul>');
  for (let i = 0; i < liste.length; i++) {
    document.write(`<li>${liste[i]}</li>`)
  }
  document.write('</ul>');
}
voirListe(listeCourses);

supprimerProduit(listeCourses, 'MOUCHOIR');
voirListe(listeCourses);

ajouterProduit(listeFilmVoir, 'Film1');
ajouterProduit(listeFilmVoir, 'Film2');
ajouterProduit(listeFilmVoir, 'Film3');
ajouterProduit(listeFilmVoir, 'Film4');

voirListe(listeCourses);
voirListe(listeFilmVoir);
