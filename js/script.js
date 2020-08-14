'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}


function quize() {
  let quizeNumber = Math.floor(Math.random() * 101);
  console.log('Загаданное число: ' + quizeNumber);
  
  let getNumber = function() {

    let userGreeting = function(ask) {
      if(ask) {
        getNumber();
      } else {
        alert('Приходите еще!');
      }
    }

    let userAnswer, writeNumber = prompt('Угадай число от 1 до 100');
    
    if (writeNumber === null) {
      alert('Приходите еще!');
    } else if (writeNumber > quizeNumber) {
      userAnswer = confirm('Загаданное число меньше');
      userGreeting(userAnswer);
    } else if (writeNumber < quizeNumber) {
      userAnswer = confirm('Загаданное число больше');
      userGreeting(userAnswer);
    } else if (!isNumber(writeNumber) || parseFloat(writeNumber) > 100) {
      userAnswer = confirm('Введите число от 0 до 100!');
      userGreeting(userAnswer);
    } else if (writeNumber == quizeNumber) {
      alert('Вы выиграли!');
      if (userAnswer) {
        let quizeNumber = Math.floor(Math.random() * 101);
        console.log('Загаданное число: ' + quizeNumber);
        game();
      }
    }
  }
  return getNumber;
}

let game = quize();
game();



