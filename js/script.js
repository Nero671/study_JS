'use strict'

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list')



function addLi() {
  if(input.value) {
    const elem = document.createElement('li');
    elem.innerHTML = input.value;
    list.append(elem);
    input.value = '';
  }
}

btn.addEventListener('click', addLi);





