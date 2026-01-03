/* Challenge

Create a function named processData that accepts a parameter called input of type string | string[] and returns a number. The function should use a type guard to determine the input type and behave as follows:

If the input is a string, return its length
If the input is a string[], return the total number of characters across all strings in the array
Create another function named formatMessage that accepts a parameter called content of type number | boolean and returns a string. The function should use a type guard to determine the input type and behave as follows:

If the input is a number, return "Value: [number]"
If the input is a boolean, return "Status: [boolean]"
The following inputs will be provided:

First input: a string that represents either a single word or a JSON array of strings like ["apple", "banana", "cherry"]
Second input: a string that represents either a number or a boolean ("true" or "false")
Process the inputs as follows:

For the first input: if it starts with "[", parse it as a JSON array of strings; otherwise, treat it as a single string
For the second input: if it's "true" or "false", convert it to a boolean; otherwise, convert it to a number
Call processData with the processed first input and print the result. Then call formatMessage with the processed second input and print the result. */

import * as fs from 'fs';

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const firstInput = inputs[0];
const secondInput = inputs[1];

// TODO: Write your code here
// Create the processData function with type guard
const processData = (input: string | string[]): number => {
  if (typeof input === 'string') {
    return input.length;
  }

  return input.reduce((acc, crr) => acc + crr.length, 0);
};
// Create the formatMessage function with type guard
const formatMessage = (content: number | boolean): string => {
  if (typeof content === 'number') {
    return `Value: ${content}`;
  }

  return `Status: ${content}`;
};
// Process the inputs according to the requirements
let input1: string | string[];

if (firstInput.startsWith('[')) {
  input1 = JSON.parse(firstInput);
} else {
  input1 = firstInput;
}

let input2: number | boolean;

if (secondInput === 'true') {
  input2 = true;
} else if (secondInput === 'false') {
  input2 = false;
} else {
  input2 = Number(secondInput);
}
// Call the functions and print the results
console.log(processData(input1));
console.log(formatMessage(input2));
