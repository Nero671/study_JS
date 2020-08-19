'use strict';

const start = document.getElementById('start');
const incomeAdd = document.getElementsByTagName('button')[0];
const expensesAdd = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('.deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let isString = function (str) {
  if (Number.isNaN(Number(str))) {
    return isNaN(str);
  }
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
  persentDeposite: 0,
  moneyDeposite: 0,
  mission: 100000,
  period: 6,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome;
      let cashIncome;

      do {
        itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксует');
      } while (!isString(itemIncome));

      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }
      while (!isNumber(cashIncome));

      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Кино, театр');
    appData.addExpenses = addExpenses.toLowerCase().split(',').map(item => item.trim());;
    appData.deposite = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let askExp;
      let count;

      do {
        askExp = prompt('Введите обязательную статью расходов?');
      } while (!isString(askExp));

      do {
        count = prompt('Во сколько это обойдется?');
      } while (!isNumber(count));

      appData.expenses[askExp] = +count;
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
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
  },
  getInfoDeposite: function () {
    if (appData.deposite) {
      do {
        appData.persentDeposite = prompt('Какой годовой процент?', 10);
      } while (!isNumber(appData.persentDeposite));
      do {
        appData.moneyDeposite = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposite));
    }
  },
  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.getInfoDeposite();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(appData.getTargetMonth());
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusIncome());


for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key, appData[key]);
}

console.log(appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1)).join(', '));

appData.getInfoDeposite();


















