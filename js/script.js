'use strict';


const replaceWord = () => {
  const task1 = document.getElementById('task1');

  task1.innerHTML = task1.innerHTML.replace(/(функц.{2})/gi, `<strong>$1</strong>`);
}

replaceWord();

const changeTime = () => {
  const task2 = document.getElementById('task2');

  task2.innerHTML = task2.innerHTML.replace(/(\d{2}:\d{2})/g, `<b>$1</b>`);
}

changeTime();

const replaceQuote = () => {
  const quote = document.querySelectorAll('div');

  quote.forEach(item => {
    item.innerHTML = item.innerHTML.replace(/«.+?»|".+?"/gi, (val)=> `<mark>${val}</mark>`);
  });
};

replaceQuote();



const color = () => {
  console.log(document.body.innerHTML.match(/#[A-Za-z0-9]{6}/gi))
};

color();



const replaceLongLink = () => {
  const link = document.querySelectorAll('div');

  link.forEach(item => {
    item.innerHTML = item.innerHTML.replace(/(http:\/\/)(www\.)?(\w+\.[a-z]{2})(\/[\w\-\/]*)(\w+.html)?/gi, `<a href='$1$2$3$4$5'>$3</a>`);
  });
};

replaceLongLink();

const replaceFirstLink = () => {
  const link = document.querySelectorAll('div');

  link.forEach(item => {
    item.innerHTML = item.innerHTML.replace(/(http:\/\/)(www\.)?(\w+\.[a-z]{2,3})/g, `<a href='$1$3'>$3</a>`);
  });
};

replaceFirstLink();

