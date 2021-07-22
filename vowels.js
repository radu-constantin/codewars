const VOWELS = [undefined, 'a', 'e', 'i', 'o', 'u']

function encode(string) {
  return string.split('').map(function (char) {
    let charIndex = VOWELS.indexOf(char);
    if (charIndex !== -1) {
      return charIndex;
    } else {
      return char;
    }
  }).join('');
}

function decode(string) {
  return string.split('').map(function (char) {
    if (char.match(/[1-5]/)) {
      return VOWELS[char];
    } else {
      return char;
    }
  }).join('');
}

console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(decode('h2ll4'));