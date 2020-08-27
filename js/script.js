'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
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
  `;
  return elem;
}

let elem1 = new DomElement('.block', 100, 100, 'red', 20);

document.body.appendChild(elem1.newElem());

