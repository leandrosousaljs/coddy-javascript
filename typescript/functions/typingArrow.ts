/* Challenge

Convert the following regular function declaration to an arrow function while maintaining all type annotations:

function subtract(a: number, b: number): number {
  return a - b;
}
Create an arrow function named subtract that performs the same operation with the same parameter types and return type.

Then create two additional arrow functions:

An arrow function named createMessage that takes a parameter text of type string and returns a string with the format "Message: [text]". Include explicit type annotations for both the parameter and return type.
An arrow function named isPositive that takes a parameter num of type number and returns true if the number is greater than 0, otherwise false. Include explicit type annotations for both the parameter and return type.
Test your arrow functions by calling them with the following values and printing the results:

Call subtract with 10 and 3
Call createMessage with "Hello World"
Call isPositive with -5
Call isPositive with 8
Print each result on a separate line in the order specified above. */

// TODO: Convert the regular function to arrow function and create the additional arrow functions

// TODO: Create the subtract arrow function with type annotations
const subtract = (a: number, b: number): number => a - b;
// TODO: Create the createMessage arrow function with type annotations
const createMessage = (text: string): string => `Message: ${text}`;
// TODO: Create the isPositive arrow function with type annotations
const isPositive = (num: number): boolean => num > 0;
// TODO: Test your arrow functions and print the results
console.log(subtract(10, 3));
console.log(createMessage('Hello World'));
console.log(isPositive(-5));
console.log(isPositive(8));
