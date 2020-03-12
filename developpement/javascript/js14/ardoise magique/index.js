const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;
const context = canvas.getContext('2d');

context.beginPath();
context.fillStyle = 'rgba(120, 150, 200, 1)';
context.strokeStyle = 'rgba(150, 150, 250, 1)';
context.arc(100, 100, 100, 0, Math.PI * 2);
context.fill();
context.stroke();

// document.addEventListener('resize', function() {
//    canvas.width = window.innerWidth / 3;
//   canvas.height = window.innerHeight / 3;
// });

context.beginPath();
context.rect(20, 20, 150, 100);
context.strokeStyle = 'white';
context.stroke();

document.addEventListener('click', function(e) {
  console.log(e);
  context.beginPath();
  context.moveTo(e.x, e.y);
  context.lineTo(e.x / 12, e.y * 25);
  context.stroke();
});




// class Animal
// {
//
//   constructor(name) {
//     this.name = name
//   }
//
//   speak(words) {
//     console.log(this.name, words);
//   }
//
// }
//
// class Chevre extends Animal
// {
// }
//
// class Chat extends Animal
// {
// }
//
//
// let chat = new Chat('Rosie');
// console.log(chat.speak('miaouuuuuu'));
//
// let chevre = new Chevre('Gilda');
// console.log(chevre.speak('béééééééé'));
