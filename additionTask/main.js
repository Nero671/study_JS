'use strict';

let count = 0,
    start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    block1 = document.querySelector('.block1'),
    block2 = document.querySelector('.block2');

let animate;
let pause = false;

let flyAnimate = function() {
  animate = requestAnimationFrame(flyAnimate);
  count++;
  if(count < 350) {
    block1.style.top = count + 'px';
    block2.style.left = count * 2 + 'px';
  } else if(count < 500) {
    block2.style.left = count * 2 + 'px';
  } else if (count > 500) {
    cancelAnimationFrame(animate);
  }
};


start.addEventListener('click', () => {
  if (!pause) {
    animate = requestAnimationFrame(flyAnimate);
    pause = true;
  } else {
    cancelAnimationFrame(animate);
    pause = false;
  }
});

stop.addEventListener('click', () => {
  cancelAnimationFrame(animate);
  count = 0;
  block1.style.top = 0;
  block1.style.left = 0;
  block2.style.top = 0;
  block2.style.left = 0;
});
