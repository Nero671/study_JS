'use strict';

class First {
  hello() {
    console.log('Привет, я метод родителя');
  }
}

class Second extends First {
  constructor(hello) {
    super(hello);
  }
  hello() {
    super.hello();
    console.log('А я наследуемый метод!');
  }
} 


const task = new Second();
task.hello();