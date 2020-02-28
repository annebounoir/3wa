'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

//bouton toolbar
let toolbar = document.getElementById('toolbar');
let toolbarToggle = document.getElementById('toolbar-toggle');

//Toolbar
let prevBtn = document.getElementById('slider-previous');
let nextBtn = document.getElementById('slider-next');
let playBtn = document.getElementById('slider-toggle');
let randomBtn = document.getElementById('slider-random');

//Slider Nav (Dot)
let sliderDot = document.getElementById('slider-dot');

//Slider
let figure = document.getElementById('slider');
let img = figure.firstElementChild;
let figcaption = figure.lastElementChild;
let sliderIndex = 0;

//ADD DOT
function newDot() {
  let dot = document.createElement('span');
  dot.classList.add('dot');
  sliderDot.append(dot);
}

//SELECT SPANS
function getSpans() {
  return document.querySelectorAll('#slider-dot span');
}

//SELECT ONE SPAN
function spanIndex(index) {
  let spans = getSpans();
  for(let i = 0; i < spans.length; i++) { //debut for

    if(i == index) {
      spans[i].classList.add('active-dot');
    }//fin if

    //dedut else
    else if (i !== index) {
      spans[i].classList.remove('active-dot');
    }

  } //fin for
}

let images = [
  {
    src: "images/1.jpg",
    caption: "legend 1",
    dot: newDot()
  },
  {
    src: "images/2.jpg",
    caption: "legend 2",
    dot: newDot()
  },
  {
    src: "images/3.jpg",
    caption: "legend 3",
    dot: newDot()
  },
  {
    src: "images/4.jpg",
    caption: "legend 4",
    dot: newDot()
  },
  {
    src: "images/5.jpg",
    caption: "legend 5",
    dot: newDot()
  },
  {
    src: "images/6.jpg",
    caption: "legend 6",
    dot: newDot()
  }
];


/*
function addDotToImg() {
  for (let i = 0; i < images.length; i++) {
    newDot();
  }
}
addDotToImg();
*/




/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

//function cacher / afficher
function hiddenClick(listenerItem, classItem) {
  listenerItem.addEventListener('click', function() {
    classItem.classList.toggle('hidden');
    classItem.classList.toggle('active');
  });
}

function opacity() {
  if (img.classList.contains('opacity')) {
    img.classList.remove('opacity');
    img.classList.remove('transition');
  }

  let opacityTimeOut = '';
  opacityTimeOut = setTimeout(function() {
  img.classList.add('transition');
  img.classList.add('opacity');
}, 100);
}

// Slider au chargement de la page
function initializeSlider() {
  img.src = images[sliderIndex].src;
  img.classList.add('opacity');
  figcaption.innerText = images[sliderIndex].caption;
  spanIndex(sliderIndex);
}

//next image
function nextImage() {
  opacity();
  sliderIndex++;
  if (sliderIndex >= images.length) {
    sliderIndex = 0;
  }
  img.src = images[sliderIndex].src;
  figcaption.innerText = images[sliderIndex].caption;
  spanIndex(sliderIndex);
}

//prev image
function prevImage() {
  if (sliderIndex <= 0) {
    sliderIndex = images.length;
  }
  opacity();
  sliderIndex--;
  img.src = images[sliderIndex].src;
  figcaption.innerText = images[sliderIndex].caption;
  spanIndex(sliderIndex);
}

//Next On click
function showNextImageOnClick() {
  nextBtn.addEventListener('click', function() {
    nextImage();
  });
}

//Prev On click
function showPreviousImageOnClick() {
  prevBtn.addEventListener('click', function() {
    prevImage();
  });
}



//Next and Prev on keyboard
function keyboardNav() {
  document.addEventListener('keydown', function(key) {

    if (key.keyCode === 37) {
      prevImage();
    }

    if (key.keyCode === 39) {
      nextImage();
    }

  });
}

//Random number
function generateRandomNumber() {
  return Math.floor(Math.random() * images.length);
}


// Random Image
function showRandomImage() {
  randomBtn.addEventListener('click', function() {
    let random = generateRandomNumber();
    img.src = images[random].src;
    opacity();
    figcaption.innerText = images[random].caption;
    spanIndex(random);
  });
}


// Dot Image
function showDotImage() {
  let spans = getSpans();

  spans.forEach(function(span, index) {
    span.addEventListener('click', function() {
      img.src = images[index].src;
      figcaption.innerText = images[index].caption;
      spanIndex(index);
    });
  });
}

// lancer et arrerer le slide show
function slideshow() {
  let showOn = '';
  playBtn.addEventListener('click', function() {

    let icon = playBtn.querySelector('i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');

    if (icon.classList.contains('fa-play')) {
      return clearInterval(showOn);
    }

    showOn = setInterval(function() {
      nextImage();
    }, 5000);

  });

}



document.addEventListener('DOMContentLoaded', function() {
    hiddenClick(toolbarToggle, toolbar);
    console.log(sliderIndex);
    initializeSlider();
    slideshow();
    showNextImageOnClick();
    showPreviousImageOnClick();
    showRandomImage();
    keyboardNav();
    showDotImage();
});
