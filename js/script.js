'use strict';

const calendar = () => {


let Data = new Date();
let Year = Data.getFullYear();
let Month = Data.getMonth();
let Day = Data.getDay();
let dayNumber = Data.getDate();
let Hour = Data.getHours();
let Minutes = Data.getMinutes();
let Seconds = Data.getSeconds();

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

let currentDay = week[Day - 1];
let currentMonth = month[Month];

// let changeHours = function() {
//   if(Hour === 1, 21, 00) {
//     document.write(' час ');
//   } else if(Hour === 2, 3, 4, 22, 23) {
//     document.write(' часа ');
//   } else {
//     document.write(' часов ');
//   }
// }

let addZero = elem => {
  if (String(elem).length === 1) {
    return '0' + elem;
  } else {
    return String(elem);
  }
};

document.write('Сегодня ' + currentDay + ', ' + dayNumber 
                + ' ' + currentMonth + ' ' + Year + ' года' 
                + ', ' + Hour + ' часов ' + Minutes + ' минут ' 
                + Seconds + ' секунд ');

document.write(addZero(dayNumber) + '.' + addZero(Month) + '.' + addZero(Year) + ' - '
            +addZero(Hour) + '.' + addZero(Minutes) + '.' + addZero(Seconds));

}

setInterval(calendar, 1000)








