/* Challenge

Create a function named getStringLength that accepts a parameter of type string | null and returns a number.

The function should handle both cases:

If the parameter is a string, return its length
If the parameter is null, return 0
Test your function by calling it with the following values and printing the results:

Call getStringLength("Hello TypeScript")
Call getStringLength(null)
Call getStringLength("TS")
Print each result on a separate line in the order listed above. */

// TODO: Write your code here
// Create the getStringLength function that accepts string | null and returns number

// Test the function with the required values and print results

function getStringLength(text: string | null): number {
  if (text === null) {
    return 0;
  }
  return text.length;
}

console.log(getStringLength('Hello TypeScript'));
console.log(getStringLength(null));
console.log(getStringLength('TS'));
