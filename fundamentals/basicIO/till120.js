/* Challenge

Write a program that gets the user's age as input (given).

The program will output (print) the number of missing years till 120 (in a specific format, shown below).

For example, for input 25, the expected output is "95 years till 120". */

let age = parseInt(inp); // Don't change this line
// Type your code below

let dif = 120 - age;
console.log(`${dif} years till 120`);
