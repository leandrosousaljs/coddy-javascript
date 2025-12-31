/* Challenge

Create a function named formatName that takes three parameters: firstName of type string (required), lastName of type string (required), and middleName of type string (optional). The function should return a formatted full name as a string with an explicit return type annotation.

When all three parameters are provided, the function should return the name in the format: "[firstName] [middleName] [lastName]"

When only the first and last names are provided, the function should return the name in the format: "[firstName] [lastName]"

The following inputs will be provided:

First input: firstName as a string
Second input: lastName as a string
Third input: middleName as a string (this may be an empty string "" to indicate no middle name)
Your function should treat an empty string for middleName the same as if no middle name was provided.

Read the three inputs, call your formatName function with the appropriate parameters, and print the result.

Note: If the third input is an empty string, call the function with only the first two parameters (do not pass the empty string as the middle name). */

import * as fs from 'fs';

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const firstName: string = inputs[0];
const lastName: string = inputs[1];
const middleName: string = inputs[2];

// TODO: Write your code here
// Create the formatName function with proper type annotations
const formatName = (firstName: string, lastName: string, middleName?: string): string => {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }

  return `${firstName} ${lastName}`;
};
// Call the function and output the result
let result = formatName(firstName, lastName, middleName);
// Remember to handle the case where middleName is an empty string
console.log(result);
