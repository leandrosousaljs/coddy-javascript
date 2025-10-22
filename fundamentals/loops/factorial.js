/* Challenge

Factorial is a mathematical operation. Factorial of n is the product of all positive integers less than or equal to n. For example:

Factorial of 3 is 6, which can be calculated as 1 * 2 * 3
Factorial of 6 is 720, which can be calculated as 1 * 2 * 3 * 4 * 5 * 6
Factorial of 2 is 2, which can be calculated as 1 * 2
Write a program that receives one input (given), an integer, calculates the factorial of the input and prints it.

For example, for input 5, the output should be 120 because 1 * 2 * 3 * 4  * 5 = 120. */

let n = parseInt(inp); // Don't change this line
let fac = 1;

for (let i = 1; i <= n; i++) {
  fac *= i;
}

console.log(fac);
