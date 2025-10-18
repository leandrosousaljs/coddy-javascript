/* Challenge

You are given a code with several variables of different types.

Your task is to perform type coercion and print the results:

Convert the number num to a string and store it in a variable named a.
Convert the boolean bool to a number and store it in a variable named b.
Convert the string str to a number and store it in a variable named c.
Perform an implicit type coercion by adding the number num to the string str and store it in a variable named d.
Use explicit type coercion functions (String(), Number()) for the first three tasks and observe implicit coercion in the last task. */

// Given variables
let num = 42;
let bool = false;
let str = '7';

// Type your code below
let a = String(num);
let b = Number(bool);
let c = Number(str);
let d = num + str;

// Don't change the line below
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
