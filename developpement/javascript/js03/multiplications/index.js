'use strict';

let userNbr = parseFloat(prompt("entrez un nombre"));
while (isNaN(userNbr)) {
  userNbr = parseFloat(prompt("entrez un nombre"));
}

document.write(`<table>`);

for (let i = 1; i <= userNbr; i++) {

  document.write(`<tr>`);

  for (let j = 1; j <= userNbr; j++){

    if (j == i) {
      document.write(`<td class="diagonale">${j*i}</td>`)
    }
    else {
      document.write(`<td>${j*i}</td>`);
    }
  }
  document.write(`</tr>`);

}

document.write(`<table>`);



/*
nombre max = userNbr * userNbr
*/
