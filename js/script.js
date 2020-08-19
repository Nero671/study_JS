'use strict'

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const img = document.querySelector('body');
const adv = document.querySelector('.adv');
const chapters = book[0].querySelector('ul').querySelectorAll('li');
const chapters2 = book[5].querySelector('ul').querySelectorAll('li');
const newElem = document.createElement('li');


// books.prepend(book[5]);
// books.prepend(book[3]);
// books.prepend(book[4]);
// books.prepend(book[0]);
// books.prepend(book[1]);

book[2].before(book[0]);
book[2].before(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

img.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
book[4].querySelector('h2').querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

chapters[2].before(chapters[3]);
chapters[2].before(chapters[6]);
chapters[2].before(chapters[8]);
chapters[2].before(chapters[4]);
chapters[2].before(chapters[5]);
chapters[2].before(chapters[7]);
chapters[2].before(chapters[9]);

chapters2[2].before(chapters2[9]);
chapters2[2].before(chapters2[3]);
chapters2[2].before(chapters2[4]);
chapters2[5].before(chapters2[6]);
chapters2[5].before(chapters2[7]);

newElem.textContent = 'Глава 8: За пределами ES6';

book[2].querySelector('ul').append(newElem);



const chapters6 = book[2].querySelector('ul').querySelectorAll('li');
chapters6[9].before(chapters6[10])





