/*
// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

Algorithm
1. Create an array called tills; DONE
2. Populate the array with input tills number of subarrays; DONE
3. For tills length push the first customers to the appropriate tills; DONE
4. Initialize a loop:
 - determine the sum of all the tills;
 - push the next customer to the smallest sum till;

 Determine smallest till
 map the tills to the time elapsed
 find the smallest time
5. Return the till with the largest sum;
*/

function queueTime(customers, numOfTills) {
  //Handles cases when there are 0 customers or 0 tills;
  if (customers.length === 0 || numOfTills === 0) {
    return 0;
  }

  //Handles cases when the number of tills is greater than the number of customers;
  if (numOfTills > customers.length) {
    return Math.max(...customers);
  }

  let tills = [];
  
  //Creates the tills as subArrays of an Array;
  for (let i = 0; i < numOfTills; i += 1) {
    tills.push([]);
  }

  //Pushes the initial customers to each till;
  tills.forEach(till => till.push(customers.shift()));

  customers.forEach(function (customer) {
    let timeOfTills = tills.map(till => till.reduce((sum, current) => sum += current))
    let shortestTime = (Math.min(...timeOfTills));
    let indexOfFreeTill = timeOfTills.indexOf(shortestTime);

    tills[indexOfFreeTill].push(customer);
  })

  let elapsedTimeOfTills = tills.map(till => till.reduce((sum, current) => sum += current));

  return Math.max(...elapsedTimeOfTills);
}

console.log(queueTime([10,2,3,3], 2));

console.log(queueTime([5,3,4], 1));

console.log(queueTime([2,3,10], 2));
