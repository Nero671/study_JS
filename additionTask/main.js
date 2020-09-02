'use strict';

const calendar = () => {

  const text = document.querySelector('.text');

  const timesOfDay = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'];
  const dayOfWeek =  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let date = new Date();
  let newYear = new Date('1 january 2021');
  let Year = date.getFullYear();
  let Month = date.getMonth();
  let Day = date.getDay();
  let dayNumber = date.getDate();
  let Hour = date.getHours();
  let Minutes = date.getMinutes();
  let Seconds = date.getSeconds();
  let currentDay = dayOfWeek[Day];

  const getTimesOfDay = function () {
    if (Hour >= 6 && Hour <= 12) {
      return timesOfDay[0];
    } else if (Hour > 12 && Hour <= 18) {
      return timesOfDay[1];
    } else if (Hour > 18 && Hour <= 22) {
      return timesOfDay[2];
    } else if (Hour > 22 && Hour < 6) {
      return timesOfDay[3];
    }
  };

  const getTime = function() {
    if(Hour >= 24 && Hour <= 12) {
      return 'AM';
    } else {
      return 'PM';
    }
  }

  const getNewYearsDays = function() {
    const amountOfDays = Math.ceil((newYear - date) / 86400000);
    if(amountOfDays % 10 === 1 && amountOfDays % 10 !== 11) {
      return amountOfDays + ' день';
    } else if(amountOfDays % 10 === 2 || amountOfDays % 10 === 3 || amountOfDays % 10 === 4) {
      return amountOfDays + ' дня';
    } else {
      return amountOfDays + ' дней';
    }
  }

  text.innerHTML = `
    ${getTimesOfDay()}, <br>
    Cегодня: ${currentDay}, <br>
    Текущее время: ${Hour}:${Minutes}:${Seconds} ${getTime()}, <br>
    До нового года осталось: ${getNewYearsDays()}
  `;

}

setInterval(calendar, 1000);