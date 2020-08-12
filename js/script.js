'use strict';


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposite = confirm('Есть ли у вас депозит в банке?'),
  period = 6,
  mission = 100000;
  // expenses1 = prompt('Введите обязательную статью расходов?'),
  // amount1 = +prompt('Во сколько это обойдется?'),
  // expenses2 = prompt('Введите обязательную статью расходов?'),
  // amount2 = +prompt('Во сколько это обойдется?');

let start = function() {
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  } 
};

start();


let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposite);

let expenses = []; 

console.log('Возможные расходы: ' + addExpenses.split(','));


let getExpensesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов?');
    
    sum += +prompt('Во сколько это обойдется?');
  }
  console.log(expenses);
  return sum;

};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);





// let missionComplete = mission / getAccumulatedMonth;

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function () {
  return mission / accumulatedMonth;
};

let budgetDay = accumulatedMonth / 30;

console.log('Срок достижения цели: ' + getTargetMonth());

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




console.log('Бюджет на день ' + Math.floor(budgetDay));
console.log(getStatusIncome());






