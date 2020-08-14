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

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposite: false,
  mission: 100000,
  period: 6,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposite = confirm('Есть ли у вас депозит в банке?');
  },
  getExpensesMonth: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

      expenses[i] = prompt('Введите обязательную статью расходов?', 'Коммуналка');
      if (isNumber(sum)) {
        sum += +prompt('Во сколько это обойдется?');
      }
    }
    return sum;
  },
  getAccumulatedMonth: function () {
    return money - expensesAmount;
  },
  getTargetMonth: function () {
    let targetMonthResult = appData.mission / accumulatedMonth;
    if (targetMonthResult > 0) {
      console.log('Срок достижения цели: ' + targetMonthResult);
    } else {
      console.log('Цель не будет достигнута');
    }
  },
  getStatusIncome: function () {
    if (budgetDay >= 1200) {
      return ('У вас высокий доход!')
    } else if (budgetDay >= 600 && budgetDay <= 1200) {
      return ('У вас средний доход!');
    } else if (budgetDay <= 600) {
      return ('К сожалению уровень доход ниже среднего');
    } else if (budgetDay <= 0) {
      return ('Что-то пошло не так...');
    }
  }
};
 
let expenses = [],
  expensesAmount,
  accumulatedMonth,
  budgetDay;

 
// let getExpensesMonth = 




// let getAccumulatedMonth =


// let getTargetMonth = 

// let getStatusIncome = 


// missionMonth = getTargetMonth();
expensesAmount = appData.getExpensesMonth();
accumulatedMonth = appData.getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;

console.log(appData.getTargetMonth());
console.log('Расходы за месяц: ' + expensesAmount);
console.log('Бюджет на день ' + Math.floor(budgetDay));
console.log(appData.getStatusIncome());






