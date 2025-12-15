/* Challenge

Create a function named getTypeInfo that takes a parameter of type any and returns a string.

The function should use the typeof operator to determine the type of the input parameter and return that type as a string.

Test your function by calling it with the following values and printing each result:

Call getTypeInfo("Hello")
Call getTypeInfo(42)
Call getTypeInfo(true)
Call getTypeInfo(null)
Print each result on a separate line in the order listed above. */

// TODO: Write your code here
// Create the getTypeInfo function that takes a parameter of type any and returns a string

const getTypeInfo = (text: any): string => String(typeof text);

// Test the function with the required values and print each result
console.log(getTypeInfo('Hello'));
console.log(getTypeInfo(42));
console.log(getTypeInfo(true));
console.log(getTypeInfo(null));
