/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Input: string;
Output: Object with characters as keys and number of occurences as values;

Rules:
-input can be any string;
-store each character as a key within the object
-if the object already has that key, increment the value by 1
*/

function count (string) {  
  let result = {};
  let chars = string.split('');

  chars.forEach(function (char) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });

  return result;
}

console.log(count('aabbcc454$'));