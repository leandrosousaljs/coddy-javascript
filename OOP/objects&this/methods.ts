/* Challenge

Add an add method to the calculator object that takes two numbers and returns their sum.

Example usage:

calculator.add(5, 3); // returns 8 */

let a = parseInt(inp[0]); // Don't change this line
let b = parseInt(inp[1]); // Don't change this line

// The calculator object already exists
const calculator = {
  // TODO: Add the 'add' method here that takes two numbers and returns their sum
  add(a: number, b: number) {
    return a + b;
  },
};

console.log(calculator.add(a, b));
