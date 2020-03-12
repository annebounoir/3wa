
// canvas.width = window.innerWidth * 4;
// canvas.height = window.innerWidth * 4;

window.addEventListener('resize', function() {
  console.log(window.innerWidth);
  if (window.innerWidth < 900)
  canvas.width = window.innerWidth - 30;
});

let clearBtn = document.getElementById('clearBtn');
let chromaCircle = document.getElementById('chromaCircle');

// COLORS //
let divPencilColors = document.getElementsByClassName('pencilColors');
let pencilColorsBtns = divPencilColors[0];
const colorBtns = Array.from(pencilColorsBtns.querySelectorAll('button[name=button]'));
console.log(colorBtns);

// SIZES //
let divPencilSizes = document.getElementsByClassName('pencilSizes');
let pencilSizesBtns = divPencilSizes[0];
const sizeBtns = Array.from(pencilSizesBtns.querySelectorAll('button[name=button]'));
console.log(sizeBtns);


class Toolbar
{

  clear()
  {
    clearBtn.addEventListener('click', function(e) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  }

  colors()
  {
    colorBtns.forEach(function(colorBtn) {
      colorBtn.addEventListener('click', function() {
        color = this.getAttribute('data-color');
      });
    });
  }

  sizes()
  {
    sizeBtns.forEach(function(sizeBtn) {
      sizeBtn.addEventListener('click', function() {
      size = this.getAttribute('data-size');
      });
    });
  }

  chromaticCircle()
  {
    chromaCircle.addEventListener('change', function(e) {
      color = chromaCircle.value;
      console.log(chromaCircle);
    });
  }

}


document.addEventListener('DOMContentLoaded', function(e) {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  let makeadrawing = new MakeADrawing(context);
  let toolbar = new Toolbar();

  makeadrawing.mouseDown();
  makeadrawing.mouseMove();
  makeadrawing.mouseUp();
  makeadrawing.mouseOut();
  toolbar.colors();
  toolbar.sizes();
  toolbar.clear();
  toolbar.chromaticCircle();
  makeadrawing.draw(e);
});
