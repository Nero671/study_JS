'use strict';

document.addEventListener('DOMContentLoaded', function () {

    let px = 10;


  function DomElement(selector, height, width, bg, fontSize, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
  }


  DomElement.prototype.newElem = function() {
    let elem;
    if(this.selector[0] === '.') {
      elem = document.createElement('div');
      elem.className = this.selector.slice(1);
    }
    if (this.selector[0] === '#') {
      elem = document.createElement('div')
      elem.className = this.selector.slice(1);
    }
    elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
      position: ${this.position};
    `;
    return elem;
  }

  let elem1 = new DomElement('.block', 100, 100, 'red', 20, 'absolute');


  document.body.appendChild(elem1.newElem());

  document.addEventListener('keyup', event => {
    let div = document.querySelector('div');
    if(event.key === 'ArrowUp') {
      div.style.top = px + 'px';
    }
    if (event.key === 'ArrowDown') {
      div.style.down = px + 'px';
    }
    if (event.key === 'Arrowleft') {
      div.style.left = px + 'px';
    }
    if (event.key === 'ArrowRight') {
      div.style.right = px + 'px';
    }
  });
});
