'use strict';

let rang = prompt('Введите ru или en');
let namePerson = prompt('Введите имя!');
let ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let result = namePerson === 'Артем' ? console.log('Директор') : console.log('Студент');
let anotherResult = namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');


if (rang === 'ru') {
  console.log(ru.toString().split(','));
} else if(rang === 'en') {
  console.log(en.toString().split(','));
}

switch (rang) {
  case 'ru': 
    console.log(ru.toString().split(','));
    break;
  case 'en':
    console.log(en.toString().split(','));
    break;
  default: 
    console.log('eror');
}

let lang_array = [];
lang_array['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
lang_array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let rang = 'ru';
console.log(lang_array[lang]);


