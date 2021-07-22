function isPangram(string){
  let inputString = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  return alphabet.every(l => inputString.includes(l));
}

let string = "The quick brown fox jumps over the lazy dog." //Is a pangram.
console.log(isPangram(string));