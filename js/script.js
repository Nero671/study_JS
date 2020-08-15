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
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кино, театр');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposite = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let askExp = prompt('Введите обязательную статью расходов?');
      let count;

      do {
        count = prompt('Во сколько это обойдется?');
      } while (!isNumber(count));

      appData.expenses[askExp] = +count;
    }
  },
  getExpensesMonth: function () {
    for(let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function () {
    let targetMonthResult = appData.mission / appData.budgetMonth;
    if (targetMonthResult > 0) {
      return 'Срок достижения цели: ' + Math.floor(targetMonthResult) + ' м.';
    } else {
      return 'Цель не будет достигнута';
    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий доход!')
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return ('У вас средний доход!');
    } else if (appData.budgetDay > 0 && appData.budgetDay < 600) {
      return ('К сожалению уровень доход ниже среднего');
    } else if (appData.budgetDay <= 0) {
      return ('Что-то пошло не так...');
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(appData.getTargetMonth());
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusIncome());


for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key, appData[key]);
}



