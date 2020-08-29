function getResult(x, y) {
  let result;
  result = String(x ** y).split('');
  result = result.reduce((previousValue, item) => +previousValue + +item, 0)
  return result;
}

console.log(getResult(4, 8));




