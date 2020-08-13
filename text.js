'use sctrict'

//Функция проверяет является числом или нет
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//Функция проверяет угадал или нет
let createGame = function () {
  let correctNumber = Math.floor(Math.random() * 101),
    setValue = 10

  console.log("Загаданное число", correctNumber)


  //Функция проверяет, хочет играть или нет
  let getWish = function (flag) {
    if (flag) {
      getNumber()
    } else {
      alert('Спасибо, что поиграли со мной')
    }
  }

  //Функция подсчитывает коичество израсходованных попыток
  let counterTry = function (userTry) {
    userTry--
    return userTry
  }

  //Функция запуска
  let incorrectAnswer = function (wish) {
    setValue = counterTry(setValue)
    getWish(wish)
  }

  let getNumber = function () {

    let wish,
      userNumber = prompt('Угадай число от 1 до 100')

    if (userNumber === null) {
      alert('Может, в следующий раз...')
    } else if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)) {
      wish = confirm('Введи число от 0 до 100!')
      getWish(wish)
    } else if (userNumber == correctNumber) {
      wish = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
      if (wish) {
        correctNumber = Math.floor(Math.random() * 101)
        setValue = 10
        console.log("Загаданное число", correctNumber)
        game()
      }
    } else if (setValue > 1) {
      if (userNumber < correctNumber) {
        wish = confirm('Загаданное число больше, осталось попыток ' + counterTry(setValue))
        incorrectAnswer(wish)
      } else if (userNumber > correctNumber) {
        wish = confirm('Загаданное число меньше, осталось попыток ' + counterTry(setValue))
        incorrectAnswer(wish)
      }
    } else if (setValue === 1) {
      wish = confirm('Попытки закончились, хотите сыграть еще?')
      if (wish) {
        correctNumber = Math.floor(Math.random() * 101)
        setValue = 10
        console.log("Загаданное число", correctNumber)
        game()
      }
    }
  }
  return getNumber
}

let game = createGame()
game()
