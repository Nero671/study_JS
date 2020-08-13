'use strict';

function quize() {
  let quizeNumber = 66;
  console.log(quizeNumber);
  
  let getNumber = function() {

    let userGreeting = function(ask) {
      if(ask) {
        getNumber();
      } else {
        alert('Приходите еще!');
      }
    }

  let userAnswer, writeNumber = +prompt('Угадай число от 1 до 100');
    
    if (writeNumber === null) {
      alert('Приходите еще!');
    } else if (writeNumber > quizeNumber) {
      userAnswer = confirm('Загаданное число меньше');
      userGreeting(userAnswer);
    } else if (writeNumber < quizeNumber) {
      userAnswer = confirm('Загаданное число больше');
      userGreeting(userAnswer);
    } else if (writeNumber === quizeNumber) {
      alert('Вы выиграли!');
    } else if (writeNumber !== 'number') {
      userAnswer = confirm('Введите число!');
      userGreeting(userAnswer);
    } 
  }
  return getNumber;
}

let game = quize();
game();



