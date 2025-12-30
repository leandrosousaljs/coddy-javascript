/* Challenge

Create a type alias named StringProcessor for a function that takes a single string parameter and returns a string.

Create a type alias named NumberCalculator for a function that takes two number parameters and returns a number.

Create a type alias named BooleanChecker for a function that takes a string parameter and returns a boolean.

Now implement the following functions that conform to these type aliases:

Create a function named toUpperCase of type StringProcessor that converts the input string to uppercase
Create a function named addPrefix of type StringProcessor that adds the prefix "Processed: " to the input string
Create a function named divide of type NumberCalculator that divides the first number by the second number
Create a function named power of type NumberCalculator that raises the first number to the power of the second number (use Math.pow)
Create a function named isEmpty of type BooleanChecker that returns true if the string has length 0, otherwise false
Create a function named startsWithA of type BooleanChecker that returns true if the string starts with the letter "A" (case-sensitive), otherwise false
Test your functions by calling them with the following values and printing the results:

Call toUpperCase with "hello world"
Call addPrefix with "data"
Call divide with 20 and 4
Call power with 3 and 4
Call isEmpty with ""
Call startsWithA with "Apple"
Print each result on a separate line in the order specified above. */

// TODO: Create type aliases here
// StringProcessor, NumberCalculator, BooleanChecker
type StringProcessor = (str: string) => string;
type NumberCalculator = (a: number, b: number) => number;
type BooleanChecker = (bol: string) => boolean;
// TODO: Implement the functions here
// toUpperCase, addPrefix, divide, power, isEmpty, startsWithA
const toUpperCase: StringProcessor = str => str.toUpperCase();
const addPrefix: StringProcessor = str => `Processed: ${str}`;
const divide: NumberCalculator = (a, b) => a / b;
const power: NumberCalculator = (a, b) => Math.pow(a, b);
const isEmpty: BooleanChecker = str => str.length === 0;
const startsWithA: BooleanChecker = str => str.startsWith('A');
// TODO: Test your functions and print the results
// Call each function with the specified values and print the results
console.log(toUpperCase('hello world'));
console.log(addPrefix('data'));
console.log(divide(20, 4));
console.log(power(3, 4));
console.log(isEmpty(''));
console.log(startsWithA('Apple'));
