'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function quize() {
  let quizeNumber = Math.floor(Math.random() * 101);
  let userAttempt = 10;
  console.log(quizeNumber);

  let userGreeting = function (ask) {
    if (ask) {
      getNumber();
    } else {
      alert('Приходите еще!');
    }
  }

  let attempts = function (attempt) {
    attempt--;
    return attempt;
  }

  let incorrectAnswer = function (userAnswer) {
    userAttempt = attempts(userAttempt)
    userGreeting(userAnswer);
  }
  
  let getNumber = function() {

  let userAnswer, writeNumber = +prompt('Угадай число от 1 до 100');
    
    if (writeNumber === null) {
      alert('Приходите еще!');
    } else if (!isNumber(writeNumber) || (parseFloat(writeNumber) > 100)) {
      userAnswer = confirm('Введите число от 0 до 100!');
      userGreeting(userAnswer);
    } else if (writeNumber === quizeNumber) {
      userAnswer = confirm('Поздравляю, Вы угадали!!!')
      if (userAnswer) {
        quizeNumber = Math.floor(Math.random() * 101);
        userAttempt = 10;
        game();
      }
    } else if (userAttempt > 1) {
      if (writeNumber < quizeNumber) {
        userAnswer = confirm('Загаданное число больше, осталось попыток ' + attempts(userAttempt));
        incorrectAnswer(userAnswer);
      } else if (writeNumber > quizeNumber) {
        userAnswer = confirm('Загаданное число меньше, осталось попыток ' + attempts(userAttempt));
        incorrectAnswer(userAnswer);
      }
    } else if (userAttempt === 1) {
      userAnswer = confirm('Попытки закончились, хотите сыграть еще?');
      if (userAnswer) {
        quizeNumber = Math.floor(Math.random() * 101);
        userAttempt = 10;
        console.log("Загаданное число", quizeNumber);
        game();
      }
    }
  }
  return getNumber;
}

let game = quize();
game();






