/* Challenge

Write a program that gets one input, a number (given). The input number indicates how many times to execute the below function. 

Create a function that calculates the sum of all of the numbers between 1 and 10000 (including) and prints it, name the function however you like. */

// Write the function below

function sum() {
  let sum = 0;
  for (let i = 1; i <= 10000; i++) {
    sum += i;
  }
  console.log(sum);
}

let n = parseInt(inp); // Don't change this line

// Execute your function n times with a loop

for (let i = 0; i < n; i++) {
  sum();
}
