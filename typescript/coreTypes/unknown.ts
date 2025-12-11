/* Challenge

Create a variable named userInput with the type unknown and assign it the string "TypeScript".

Then write a type guard using typeof to check if userInput is a string. If it is a string, print the uppercase version of the string to the console. If it's not a string, print "Not a string" to the console.

This demonstrates how unknown requires type checking before you can safely use type-specific methods like toUpperCase(). */

// Create the userInput variable with unknown type
let userInput: unknown = 'TypeScript';

if (typeof userInput === 'string') {
  console.log(userInput.toLocaleUpperCase());
} else {
  console.log('Not a string');
}

// TODO: Write your code here
// Use typeof to check if userInput is a string
// If it's a string, print the uppercase version
// If it's not a string, print "Not a string"
