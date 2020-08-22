'use strict';

let start = document.getElementById('start');
let incomeAdd = document.getElementsByTagName('button')[0];
let expensesAdd = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('.deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.querySelector('.budget_month-value');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItem = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');
let lettersSym = document.querySelectorAll('[placeholder="Наименование"]');
let numSym = document.querySelectorAll('[placeholder="Сумма"]');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let isString = function (str) {
  if (Number.isNaN(Number(str))) {
    return isNaN(str);
  }
} 
  


let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposite: false,
  persentDeposite: 0,
  moneyDeposite: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    // do {
    //   money = prompt('Ваш месячный доход?');
    // }
    // while (!isNumber(money));

    // if (salaryAmount.value === '') {
    //   alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
    //   return;
    // } 

    appData.budget = +salaryAmount.value;
    console.log(salaryAmount.value);

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getInfoDeposite();

    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.round(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSaveMoney();

  },
  addExpensesBlock: function() {
    // console.log(expensesItem.parentNode);
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    cloneExpensesItems.querySelector('.expenses-title').value = '';
    cloneExpensesItems.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
      expensesAdd.style.display = 'none';
    }
  },
  getExpenses: function() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value; 
      if(itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses; 
      } 
    });
  },
  getIncome: function() {
    // if (confirm('Есть ли у вас дополнительный источник заработка?')) {
    //   let itemIncome;
    //   let cashIncome;

    //   do {
    //     itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксует');
    //   } while (!isString(itemIncome));

    //   do {
    //     cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
    //   }
    //   while (!isNumber(cashIncome));

    //   appData.income[itemIncome] = cashIncome;
    // }

    // for(let key in appData.income) {
    //   appData.incomeMonth += +appData.income[key];
    // }
    incomeItem.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.addIncome[itemIncome] += +cashIncome;
        appData.incomeMonth += +cashIncome; 
      }
    });
  },
  addIncomeBlock: function() {
    let cloneIncomeItems = incomeItem[0].cloneNode(true);
    cloneIncomeItems.querySelector('.income-title').value = '';
    cloneIncomeItems.querySelector('.income-amount').value = '';
    incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomeAdd);
    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3) {
      incomeAdd.style.display = 'none';
    }
  },
  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if(item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function() {
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if(itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    }); 
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function () {
    return targetAmount.value / appData.budgetMonth;
    // if (targetMonthResult > 0) {
    //   return 'Срок достижения цели: ' + Math.floor(targetMonthResult) + ' м.';
    // } else {
    //   return 'Цель не будет достигнута';
    // }
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
    return appData.budgetMonth * periodSelect.value;
  },
  changeRange: function(event) {
    let target = event.target;
    periodAmount.textContent = target.value;
    incomePeriodValue.value = appData.calcSaveMoney();
  },
  startBlock: function() {
    start.disabled = !salaryAmount.value.trim();
  }
};

appData.startBlock();
start.addEventListener('click', appData.start);
expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changeRange);
salaryAmount.addEventListener('input', appData.startBlock);



const addEventChangeText = event => {
  let tmpValue = event.target.value;
  const changeInputText = event => {
    if (!/^[,. а-яА-ЯёЁ]+$/.test(event.target.value)) {
      alert('Доупускается ввод только русских букв, пробела, точки и запятой!');
      event.target.value = tmpValue;
      event.target.removeEventListener('change', changeInputText);
    }
    tmpValue = event.target.value;
  };
  event.target.addEventListener('change', changeInputText);
};
document.querySelectorAll('[placeholder="Наименование"]').forEach(input => {
  input.addEventListener('focus', addEventChangeText);
});

document.oninput = function() {
  lettersSym.forEach(inpuе => {
    inpuе.value = inpuе.value.replace(/^[А-Яа-яЁё\s]+$/, '');
  });
}

document.oninput = function() {
  numSym.forEach(input => {
    input.value = input.value.replace(/[^\+\d]/g, '');
  });
}




appData.getInfoDeposite();
console.log(appData);