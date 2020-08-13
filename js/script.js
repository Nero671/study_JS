let arr = ['132', '49', '37482', '2930401', '39023', '930249', '48293'];


for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

function primeNumber(n) {
  let seive = [];
  let primes = [];

  for(let i = 2; i <= n; i++) {
    if(!seive[i]) {
      primes.push(i);
      for (let j = i * 2; j <= n; j += i) {
        seive[j] = true; 
      }
    }
  }
  for(number of primes) {
    console.log('Делитель числа ' + number + ': 1 и ' + number);
  }
}

primeNumber(100);