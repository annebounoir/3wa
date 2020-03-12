

function getMousePos(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height)
  };
}

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min +1) + min);
}
