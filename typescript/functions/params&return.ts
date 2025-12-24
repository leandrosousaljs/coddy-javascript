/* Challenge

Create a function named add that takes two parameters of type number and returns their sum. The function must have an explicit return type annotation of number.

Create another function named getFullName that takes two parameters: firstName of type string and lastName of type string. The function should return the full name as a single string with a space between the first and last names. Add an explicit return type annotation of string.

Create a third function named isEligible that takes two parameters: age of type number and hasLicense of type boolean. The function should return true if the person is 18 or older AND has a license, otherwise return false. Add an explicit return type annotation of boolean.

Test your functions by calling them with the following values and printing the results:

Call add with 15 and 27
Call getFullName with "John" and "Smith"
Call isEligible with 20 and true
Call isEligible with 16 and true
Print each result on a separate line in the order specified above. */

// TODO: Write your code here
// Create the add function with explicit return type annotation
const add = (a: number, b: number): number => a + b;
// Create the getFullName function with explicit return type annotation
const getFullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;
// Create the isEligible function with explicit return type annotation
const isEligible = (age: number, hasLicense: boolean): boolean => (age >= 18 && hasLicense ? true : false);
// Test the functions and print the results
// Call add with 15 and 27
console.log(add(15, 27));
// Call getFullName with "John" and "Smith"
console.log(getFullName('John', 'Smith'));
// Call isEligible with 20 and true
console.log(isEligible(20, true));
// Call isEligible with 16 and true
console.log(isEligible(16, true));
