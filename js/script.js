'use strict'

const userName = document.querySelector('.user'),
      reg = document.getElementById('reg'),
      login = document.getElementById('login'),
      list = document.getElementById('list');

let userFullLogin = [];
let user = {};
let date = new Date();
let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let userData = JSON.parse(localStorage.getItem('userData') || '[]');
let userLogin;

let isString = function (str) {
  if (Number.isNaN(Number(str))) {
    return isNaN(str);
  }
}

const registration = function() {
  do {
    userLogin = prompt('Введите через пробел имя и фамилию пользователя:', '').trim();
    userFullLogin = userLogin.split(' ');
    user.name = userFullLogin[0];
    user.surname = userFullLogin[1];
  } while (!isString(userLogin) || userFullLogin.length !== 2);
  user.login = prompt('Введите логин:', '').trim();
  user.password = prompt('Введите пароль:', '').trim();
  user.date = date.getDate() + ' ' + month[date.getMonth() + 1] + ' ' 
                             + date.getFullYear() + ' г. ' + date.getHours() 
                             + ' ч. ' + date.getMinutes() + ' мин. ' 
                             + date.getSeconds() + ' сек. ';

  userData.push(user);
  console.log(userFullLogin);
  console.log(user);
};

const render = () => {
  list.textContent = '';
  localStorage.setItem('userData', JSON.stringify(userData));
  userData.forEach((item, index) => {
    let li = document.createElement('li');
    li.style.display = 'flex';
    li.innerHTML = `
      Имя: ${item.name}, фамилия: ${item.surname}, зарегистрирован: ${item.date}       <button class="cansel">X</button>;
    `;
    list.append(li);

    const cansel = li.querySelector('.cansel');
    cansel.addEventListener('click', () => {
      userData.splice(index, 1);
      render();
    });
  });
};

 

reg.addEventListener('click', () => {
  registration();
  render();
});

login.addEventListener('click', () => {
  let login = prompt('Введите логин:'),
    password = prompt('Введите пароль:'),
    count = 0;
  userData.forEach(item => {
    if (login === item.login && password === item.password) {
      userName.textContent = item.name;
      return;
    }
    count++;
    if (count === userData.length) {
      alert('Пользователь не найден');
    }
  });
});

render();