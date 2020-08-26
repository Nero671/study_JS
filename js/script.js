'use strict';

let start = document.getElementById('start');
let cansel = document.getElementById('cancel')
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
    appData.budget = +salaryAmount.value;
    console.log(salaryAmount.value);

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposite();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();

    if(start) {
      start.style.display = 'none';
      cansel.style.display = 'block';
      this.blockInputs();
    }
  },
  blockInputs: function(disabled = true) {
      document.querySelectorAll('input[type=text]').forEach(item => {
        item.disabled = disabled;
    });
  },
  reset: function() {
    // for(let i = incomeItem.length - 1; i > 0; i--) {
    //   incomeItem[0].parentNode.removeChild(incomeItem[i]);
    // }
    // for (let i = expensesItems.length - 1; i > 0; i--) {
    //   expensesItems[0].parentNode.removeChild(expensesItems[i]);
    // }
    
    incomeAdd.style.display = '';
    expensesAdd.style.display = '';
    appData.blockInputs(false);
    document.querySelectorAll('input[type=text]').forEach(item => {
      item.value = '';
    });
    appData.getBudget();
    periodSelect.value = document.querySelector('.period-amount').textContent = 1;
    appData.startBlock();
    start.style.display = 'block';
    cansel.style.display = 'none';
  },
  showResult: function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.round(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSaveMoney();

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
    let numbersOnly = document.querySelectorAll('.expenses-amount');
    let letterssOnly = document.querySelectorAll('.expenses-title');
    numbersOnly.forEach(input => {
      input.addEventListener('keyup', function () {
        input.value = input.value.replace(/[^\+\d]/g, '');
      })
    });
    letterssOnly.forEach(input => {
      input.addEventListener('keyup', function () {
        input.value = input.value.replace(/[\d]/g, '');
      })
    });
  },
  getExpenses: function() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value; 
      if(itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = +cashExpenses; 
      } 
    });
  },
  getIncome: function() {
    incomeItem.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.addIncome[itemIncome] = +cashIncome;
        this.incomeMonth += +cashIncome; 
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
    let numbersOnly = document.querySelectorAll('.income-amount');
    let letterssOnly = document.querySelectorAll('.income-title');
    numbersOnly.forEach(input => {
      input.addEventListener('keyup', function () {
        input.value = input.value.replace(/[^\+\d]/g, '');
      })
    });
    letterssOnly.forEach(input => {
      input.addEventListener('keyup', function () {
        input.value = input.value.replace(/[\d]/g, '');
      })
    });
  },
  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if(item !== '') {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function() {
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if(itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    }); 
  },
  getExpensesMonth: function () {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  },
  getBudget: function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function () {
    return targetAmount.value / this.budgetMonth;
    // if (targetMonthResult > 0) {
    //   return 'Срок достижения цели: ' + Math.floor(targetMonthResult) + ' м.';
    // } else {
    //   return 'Цель не будет достигнута';
    // }
  },
  getStatusIncome: function () {
    if (this.budgetDay >= 1200) {
      return ('У вас высокий доход!')
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      return ('У вас средний доход!');
    } else if (this.budgetDay > 0 && this.budgetDay < 600) {
      return ('К сожалению уровень доход ниже среднего');
    } else if (this.budgetDay <= 0) {
      return ('Что-то пошло не так...');
    }
  },
  getInfoDeposite: function () {
    if (this.deposite) {
      do {
        this.persentDeposite = prompt('Какой годовой процент?', 10);
      } while (!isNumber(this.persentDeposite));
      do {
        this.moneyDeposite = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(this.moneyDeposite));
    }
  },
  calcSaveMoney: function () {
    return this.budgetMonth * periodSelect.value;
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
start.addEventListener('click', appData.start.bind(appData));
expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changeRange);
salaryAmount.addEventListener('input', appData.startBlock);
cansel.addEventListener('click', appData.reset);


let onlyLetters = function () {
  lettersSym.forEach(input => {
    input.addEventListener('keyup', function () {
      input.value = input.value.replace(/[\d]/g, '');
    })
  });
}

let onlyNumbers = function () {
  numSym.forEach(input => {
    input.addEventListener('keyup', function () {
      input.value = input.value.replace(/[^\+\d]/g, '');
    })
  });
}

onlyNumbers();
onlyLetters();








appData.getInfoDeposite();
