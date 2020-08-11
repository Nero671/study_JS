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


function getExpensesMonth() {
  return amount1 + amount2;
}

function getAccumulatedMonth() {
  return money - amount1 - amount2;
}

function getTargetMonth() {
  return mission / accumulatedMonth;
}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposite);
console.log('Расходы за месяц: ' + getExpensesMonth());
console.log('Возможные расходы: ' + addExpenses.split(','));
console.log('Срок достижения цели: ' + getTargetMonth());
console.log('Бюджет на день ' + Math.floor(budgetDay));

// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + '$');
// console.log('Цель будет достигнута за ' + Math.ceil(missionComplete) + ' месяцев');
// console.log('Бюджет на месяц ' + accumulatedMonth);

// if (budgetDay >= 1200) {
//   console.log('У вас высокий доход!')
// } else if (budgetDay >= 600 && budgetDay <= 1200) {
//   console.log('У вас средний доход!');
// } else if (budgetDay <= 600) {
//   console.log('К сожалению уровень доход ниже среднего');
// } else if (budgetDay <= 0) {
//   console.log('Что-то пошло не так...');
// }



