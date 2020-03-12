let size = 1;
let color = "grey";
let isDrawing = false;
let lastPosX = 0;
let lastPosY = 0;


class MakeADrawing
{
  constructor(ctx) {
      this.context = ctx;
  }

  draw(e) {

    if(!isDrawing) {
        return;
    }

    this.context.beginPath();
    this.context.moveTo(e.offsetX, e.offsetY);
    this.context.lineTo(lastPosX,lastPosY);
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
    this.context.lineWidth = size;
    this.context.strokeStyle = color;
    this.context.stroke();
    lastPosX = e.offsetX;
    lastPosY = e.offsetY;
  }

  mouseDown() {
    canvas.addEventListener('mousedown', function(e) {
      isDrawing = true;
      lastPosX = e.offsetX;
      lastPosY = e.offsetY;
    });
  }

  mouseMove() {
    canvas.addEventListener('mousemove', this.draw.bind(this));
  }

  mouseUp() {
    canvas.addEventListener('mouseup', function(e) {
      isDrawing = false;
    });
  }

  mouseOut() {
    canvas.addEventListener('mouseout', function(e) {
      isDrawing = false;
    });
  }


}
