'use strict';

let money = +prompt('Ваш месячный доход?'),
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposite = confirm('Есть ли у вас депозит в банке?'),
  period = 6,
  mission = 100000,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?');

let accumulatedMonth = getAccumulatedMonth();
let budgetDay = accumulatedMonth / 30;
let missionComplete = mission / accumulatedMonth;

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};


function getExpensesMonth() {
  return amount1 + amount2;
};

function getAccumulatedMonth() {
  return money - amount1 - amount2;
};

function getTargetMonth() {
  return mission / accumulatedMonth;
};

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий доход!')
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    return ('У вас средний доход!');
  } else if (budgetDay <= 600) {
    return ('К сожалению уровень доход ниже среднего');
  } else if (budgetDay <= 0) {
    return ('Что-то пошло не так...');
  }
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposite);
console.log('Расходы за месяц: ' + getExpensesMonth());
console.log('Возможные расходы: ' + addExpenses.split(','));
console.log('Срок достижения цели: ' + getTargetMonth());
console.log('Бюджет на день ' + Math.floor(budgetDay));
console.log(getStatusIncome());






