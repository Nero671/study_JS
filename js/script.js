let money = 10000,
    income = 'Фриланс',
    addExpenses = 'Интернет, такси, коммуналка',
    deposite = true,
    mission = 100000,
    period = 6;

let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposite);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + '$');
console.log(addExpenses.toLowerCase().split(','));
console.log(budgetDay);