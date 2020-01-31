'use strict';   // Mode strict du JavaScript

for (let i = 10; i > 0; i--){
  document.write(i);
}

document.write("<br>");

for (let j = 20; j > 0; j--){
  document.write(j);
}

document.write("<br>");

let tbl = ["JE", "SUIS", "UN", "TABLEAU"];
for (let k = 0; k < tbl.length; k++) {
  document.write(`<p> ${tbl[k]} </p>`);
}
