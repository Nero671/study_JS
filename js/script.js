'use strict';

let change = document.getElementById('change');
let color = document.getElementById('color');
let body = document.querySelector('body');


let randomColor = function() {
  let letters16 = '0123456789ABCDEF';
  let colorTag = '#';
  for(let i = 0; i < 6; i++) {
    colorTag += [Math.floor(Math.random() * 16)];
  } 
  return colorTag;
}

let changeColor = function() {
  body.style.backgroundColor = randomColor();
  color.textContent = randomColor();
}



change.addEventListener('click', changeColor);

