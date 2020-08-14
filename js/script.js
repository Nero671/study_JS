'use strict';


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
 start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};

start();
 
let income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposite = confirm('Есть ли у вас депозит в банке?'),
  period = 6,
  mission = 100000,
  expenses = [],
  expensesAmount,
  accumulatedMonth,
  budgetDay;


let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposite);

 
let getExpensesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов?', 'Коммуналка');
    if (isNumber(sum)) {
      sum += +prompt('Во сколько это обойдется?');
    }
  }
  return sum;
};




let getAccumulatedMonth = function () {
  return money - expensesAmount;
};


let getTargetMonth = function () {
  let targetMonthResult =  mission / accumulatedMonth;
  if (targetMonthResult > 0) {
    console.log('Срок достижения цели: ' + targetMonthResult);
  } else {
    console.log('Цель не будет достигнута');
  }
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


// missionMonth = getTargetMonth();
expensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;

console.log(getTargetMonth());
console.log('Возможные расходы: ' + addExpenses.split(','));
console.log('Расходы за месяц: ' + expensesAmount);
console.log('Бюджет на день ' + Math.floor(budgetDay));
console.log(getStatusIncome());






