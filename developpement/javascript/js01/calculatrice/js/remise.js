/*
JS1.2 - Calculatrice de TVA avec remise
Énoncé

L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.
Détails

    L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
    La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
    Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
    S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
    Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final.

Modifié le: jeudi 10 août 2017, 14:39
*/
const TVA = 20;

let montantHT;
let clientREP;

let montantTVA;
let montantRM;

let montantRMHT;
let montantTTC;

montantHT = parseFloat(window.prompt("Entrez votre montant ht"));
clientREP = window.prompt("Voulez-vous une remise ?");

if(clientREP == "yes" || clientREP == "oui") {
  const REMISE =  parseFloat(window.prompt("Entrez votre montant de votre remise"));
  // calcul remise
  montantRM = montantHT * REMISE / 100;
  montantRMHT = montantHT - montantRM;

  // calcul tva
  montantTVA = montantRMHT * TVA / 100;
  montantTTC = montantRMHT + montantTVA;
  alert(
    `votre montant TTC avec remise est de ${montantTTC} euros
    votre remise est de ${montantRM} euros`)
}
else {
  montantTVA = montantHT * TVA / 100;
  montantTTC = montantHT + montantTVA;
  alert("aucune remise n'a été appliqué")
}
