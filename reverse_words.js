function spinWords(string) {
  let words = string.split(' ');

  words = words.map (function (word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }  else {
      return word;
    }
  })

return words.join(' ');
}

console.log(spinWords('Welcome home'));