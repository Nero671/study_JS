let num = 266219;
let total = 1;

let numCount = (num.toString().split(''));

for (i = 0; i < numCount.length; i++) { 
  total *= numCount[i];
}

console.log(total);

let task2 = total ** 3;
console.log(task2);

let task3 = task2.toString().slice(0, 2)
alert(task3);
