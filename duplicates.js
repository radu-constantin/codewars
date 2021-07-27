// You are given a table, in which every key is a stringified number, and each
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each
// character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically,
// and the larger key will keep that character. That's why in the example above the
// array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

//Note: In preparation for the 216, think about edge cases, input validation, code organization etc. Even though codewars problems don't ////focus on edge cases, add your own caveats for extra challenge ;) For instance: what if there are lowercase letters in the arrays?

/*
Input: Object;
Output: Object with duplicates removed;

Rules:
- Each value set must be filtered so that it only has only unique characters;
- Whenever a value is found in two keys, it will be kept in the numerically greater key;

Algorithm and Data Structure;
- Sort the object keys by numeric value;
- Create a values array that will initially only hold the values of the greatest key; currentValues
- Iterate through the object keys array starting from the second largest one;
  - filter the array to keep only values that are not in the currentValues array;
  - concatentate currentValues with the newly filtered values;
- return the new object;

 Example 1
 input = {
   "1": ["C", "F", "G"],
   "2": ["A", "B", "C"],
   "3": ["A", "B", "D"],
 }

 output = {
   "1": ["F", "G"],
   "2": ["C"],
   "3": ["A", "B", "D"],
 }

*/

function removeDuplicateIds(object) {
  let keys = Object.keys(object).sort((a, b) => b - a);
  for (let key in object) {
    let uniqueValues = new Set(object[key]);
    object[key] = [...uniqueValues];
  }

  let currentValues = object[keys[0]];

  keys.slice(1).forEach (function (key) {
    object[key] = object[key].filter(element => !currentValues.includes(element));
    currentValues = currentValues.concat(object[key]);
  });
}

removeDuplicateIds({
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
});