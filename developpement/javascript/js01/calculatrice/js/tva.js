/* Énoncé

L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.
Détails

    Le taux de TVA utilisé est le taux normal en vigueur en France, il ne bouge pas.
    Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
    Le montant HT est un nombre à virgule (on peut saisir des centimes).

Rappels

    Attention au type de la donnée renvoyé par window.prompt() !

*/

let ht = parseFloat(window.prompt("entrez montant HT"));
document.write("montant HT = " + ht + "euros");
document.write("<br>");

const TVA = 20;
document.write("TVA = " + TVA + "%");
document.write("<br>");

let ttc = ht * (1+TVA/100);
ttc = ttc.toFixed(2);
document.write("montant TTC = " + ttc + "euros");
