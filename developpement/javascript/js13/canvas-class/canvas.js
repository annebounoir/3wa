const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

class Utilitaires
{
  constructor(canvas, event) {
      this.mousePos = this.getMousePos(canvas, event);
  }

  getMousePos(canvas, event) {
      let rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * (canvas.width / rect.width),
        y: (event.clientY - rect.top) * (canvas.height / rect.height)
      };
  }

  getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min +1) + min);
  }
}

class Dessin {

  constructor(canvas, e, utilitaires) {
    this.canvas = canvas;
    this.e = e;
    this.utilitaires = utilitaires;

    this.dessineUnCercle();
  }

  dessineUnCercle() {
    let position = this.utilitaires.getMousePos(this.canvas, this.e);
    let circleSize = this.utilitaires.getRandomNumber(45, 1);
    const colorRef = {
      r: this.utilitaires.getRandomNumber(255, 0),
      g: this.utilitaires.getRandomNumber(255, 0),
      b: this.utilitaires.getRandomNumber(255, 0),
    };

    context.beginPath();
    context.fillStyle = `rgba(${colorRef.r}, ${colorRef.g}, ${colorRef.b}, 1)`;
    context.arc(position.x, position.y, circleSize, 0, Math.PI * 2);
    context.fill();
  }

}

canvas.addEventListener('click', function(e) {

  let utilitaires = new Utilitaires(canvas, e);
  let dessineMoiUnCercle = new Dessin(canvas, e, utilitaires);
});
