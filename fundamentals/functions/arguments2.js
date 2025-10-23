/* Challenge

Write a program that gets two numbers as inputs. These numbers are passed as arguments to a function.

Create a function called sumRange that:
Takes two arguments, start and end.
Calculates the sum of all integers between start and end (inclusive).
Prints the result.
Call the sumRange function once with the input numbers. */

let num1 = parseInt(inp[0]); // Don't change this line
let num2 = parseInt(inp[1]); // Don't change this line
// Type your code below

function sumRange(start, end) {
  sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

let result = sumRange(num1, num2);
console.log(`The sum of numbers from ${num1} to ${num2} is ${result}.`);
