/* Challenge

Create a function named printId that accepts a parameter called id of type string | number and prints it to the console. The function should have an explicit return type of void.

Create another function named processValue that accepts a parameter called data of type boolean | string and returns it unchanged. The function should have an explicit return type of boolean | string.

Create a third function named formatOutput that accepts a parameter called input of type number | string and returns a formatted string. If the input is a number, return "Number: [input]". If the input is a string, return "Text: [input]". The function should have an explicit return type of string.

The following inputs will be provided:

First input: a value that can be either a string or number (for printId)
Second input: a value that can be either a boolean or string (for processValue)
Third input: a value that can be either a number or string (for formatOutput)
Read the three inputs, call each function with the appropriate input, and handle the outputs as follows:

Call printId with the first input (this will print directly)
Call processValue with the second input and print the returned value
Call formatOutput with the third input and print the returned value
Note: The first input will be provided as a string, but if it represents a number (like "123"), convert it to a number before passing it to printId. The second input will be provided as a string, but if it's "true" or "false", convert it to the corresponding boolean value. The third input will be provided as a string, but if it represents a number, convert it to a number. */

import * as fs from 'fs';

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const input1 = inputs[0];
const input2 = inputs[1];
const input3 = inputs[2];

// Convert inputs to appropriate types
const firstInput = isNaN(Number(input1)) ? input1 : Number(input1);
const secondInput = input2 === 'true' ? true : input2 === 'false' ? false : input2;
const thirdInput = isNaN(Number(input3)) ? input3 : Number(input3);

// TODO: Write your code here
// Create the three functions: printId, processValue, and formatOutput
const printId = (data: string | number): void => console.log(data);
const processValue = (data: boolean | string): boolean | string => data;
const formatOutput = (input: number | string): string => {
  if (typeof input === 'number') {
    return `Number: ${input}`;
  } else {
    return `Text: ${input}`;
  }
};
// TODO: Call the functions with the appropriate inputs and handle outputs

printId(input1);
console.log(processValue(input2));
console.log(formatOutput(input3));
