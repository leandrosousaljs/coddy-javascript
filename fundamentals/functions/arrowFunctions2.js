/* Challenge

Create an arrow function named sumOfEvens that:

Takes one parameter: n (a positive integer).
Calculates the sum of all even numbers from 1 to n (inclusive).
Returns the result. */

// Write code here

let sumOfEvens = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
