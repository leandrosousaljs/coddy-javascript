/* Challenge

You are given a code that gets as input two numbers n1 and n2 and a character op (given).

The possible values for op are '+', '-', '/' and '*'

Your task is to set the variable result based on the conditions:

if op is '+', set result with n1 + n2.
if op is '-', set result with n1 - n2.
if op is '/', set result with n1 / n2.
if op is '*', set result with n1 * n2 */

let n1 = parseInt(inp[0]); // Don't change this line
let n2 = parseInt(inp[1]); // Don't change this line
let op = inp[2]; // Don't change this line
let result = 0;

if (op === '+') {
  result = n1 + n2;
} else if (op === '-') {
  result = n1 - n2;
} else if (op === '/') {
  result = n1 / n2;
} else {
  result = n1 * n2;
}

// Don't change the line below
console.log(`result = ${result}`);
