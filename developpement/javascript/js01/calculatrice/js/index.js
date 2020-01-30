/* ou Var */
let nombre = 1; /* utiliser let plutôt que var */
document.write(nombre); /* ecrire dans le html */
nombre = "nombre";
document.write("<br>");
document.write(nombre);

document.write("<br>");
const MOT = "bonjour"; /* variable constante */
document.write(MOT);

/* les operateurs */
document.write("<br><br>");
let four = 4;
let result = four + four;
document.write(++result);
result = four - four;
document.write(result);
result = four * four;
document.write(result);
result = four / four;
document.write(result);
result = four % four;
document.write(result);


document.write("<br>");
result = ++result;
document.write(result);

document.write("<br>");
result = --result;
document.write(result);

document.write("<br>");
result += result; /* version racourcie de result = resultat + resultat */
document.write(result);

/* window.prompt() */
let user = window.prompt("Salutation utilisateur");
alert(user);

/* concat */
document.write("<br><br>");
document.write("hey " + user);
document.write(user + 1);
document.write("11" +1);


document.write("<br><br>");
