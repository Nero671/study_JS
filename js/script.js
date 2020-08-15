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
      appData.expenses[prompt('Введите обязательную статью расходов?')] = (() => {
        let sum = 0;
        do {
          sum = prompt('Во сколько это обойдется?');
        } while (!isNumber(sum));
        return +sum;
      })();
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
      console.log('Срок достижения цели: ' + Math.floor(targetMonthResult) + ' м.');
    } else {
      console.log('Цель не будет достигнута');
    }
  },
  getStatusIncome: function () {
    if (appData.budget >= 1200) {
      return ('У вас высокий доход!')
    } else if (appData.budget >= 600 && appData.budget <= 1200) {
      return ('У вас средний доход!');
    } else if (appData.budget <= 600) {
      return ('К сожалению уровень доход ниже среднего');
    } else if (appData.budget <= 0) {
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



