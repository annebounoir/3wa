'use strict';

let div = document.getElementsByClassName('rectangle');
let rectangle = div[0];

let button = document.getElementById('toggle-rectangle');


button.addEventListener('click', function(){
  if (rectangle.classList.contains('cache')) {
    return rectangle.classList.remove('cache');
  }
  rectangle.classList.add('cache');
});

rectangle.addEventListener('dblclick', function() {
  if (rectangle.classList.contains('important')) {
    rectangle.classList.remove('important');
  }
  rectangle.classList.add('good');
});


rectangle.addEventListener('mouseenter', function() {
    rectangle.classList.add('important');
});

rectangle.addEventListener('mouseout', function() {
  rectangle.classList.remove('important');
});
