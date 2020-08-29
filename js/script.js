const input1 = document.getElementById('a'),
  input2 = document.getElementById('b'),
  sum = document.getElementById('sum'),
  mult = document.getElementById('mult'),
  res = document.getElementById('res');

const calculator = {

  sum: function () {
    if (input1.value && input2.value) {
      this.numA = +input1.value;
      this.numB = +input2.value;
      this.result = this.numA + this.numB
    }
  },
  mult: function () {
    if (input1.value && input2.value) {
      this.numA = +input1.value;
      this.numB = +input2.value;
      this.result = this.numA * this.numB
    }
  },
  show: function () {
    if (input1.value && input2.value) {
      res.value = this.result;
    } 
  }
};

sum.addEventListener('click', () => {
  calculator.sum();
  calculator.show();
});

mult.addEventListener('click', () => {
  calculator.mult();
  calculator.show();
});




