/* Challenge

You're building a signup form. You have a file validation-utils.js that contains useful email validation functions.

Your task:

Import the validateEmail function in main.js (It is the named export, not the default export)
Call the function and pass the user@example.com email address
Print the results using console.log */

// TODO: Import the validateEmail function here (it is the named export)
import { validateEmail } from './validation-utils.ts';
// TODO: Call the function and pass user@example.com email address and print the results using console.log
console.log(validateEmail('user@example.com'));
