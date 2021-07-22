function rowSumOddNumbers(n) {
  function add(num) {
    if (num === 1) return 1;
    return num + add(num - 1);
  }

  let numOfOdds = add(n);
  let oddNumber = 1;
  let arrayOfOdds = []

  for (let i = 1; i <= numOfOdds; i += 1) {
    arrayOfOdds.push(oddNumber);
    oddNumber += 2;
  }

  return arrayOfOdds.slice(-n).reduce((acc, value) => acc + value);
}

console.log(rowSumOddNumbers(42));