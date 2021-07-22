function duplicateCount(text) {
  let duplicateCounter = {};
  text.toLowerCase().split('').forEach(function(char) {
    if (duplicateCounter[char]) {
      duplicateCounter[char] += 1;
    } else {
      duplicateCounter[char] = 1;
    }
  })

  return Object.values(duplicateCounter).filter(count => count > 1).length;
}

console.log(duplicateCount("aabbcde"));