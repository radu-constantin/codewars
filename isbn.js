/*
ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
Examples
1112223339   -->  true
111222333    -->  false
1112223339X  -->  false
1234554321   -->  true
1234512345   -->  false
048665088X   -->  true
X123456788   -->  false
D$$134411X   -->  false


Input: String;
Output: Boolean that represents if input is an ISBN or not;

Rules:
- ISBN is 10 characters long;
- First 9 characters are digits 0-9;
- Last character can be 0-9 or X.

- ISBN is valid if the sum of the digits multiplied by their position modulo 11 === 0;
ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

Algorithm and Data Structure
1. Check if ISBN:
- length === 10;
- first 9 chars match 0-9;
- last char matches 0-9 or X;

2. If ISBN does not pass all conditions return false;
   Else, continue to point 3.

3. Split the string into an array of chars;
- if last element is X, replace it with 10;
- map the array to (Number(element) * (index + 1))
- return the result of array.reduce(sum) % 11;
*/

function validISBN10(isbn) {
  function validateFormat(isbn) {
    return isbn.match(/^[0-9]{9}[0-9X]$/);
  }

  if (!validateFormat(isbn)) return false; 

  let chars = isbn.split('');
  chars = chars.map(char => char === 'X' ? 10 : Number(char));

  let sum = chars.reduce((sum, num, index) => sum + num * (index + 1));

  return sum % 11 === 0 ? true : false; 
}

console.log(validISBN10('1112223339'));