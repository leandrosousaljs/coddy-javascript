/* Challenge

Create a generic function named getFirstElement that takes an array of any type and returns the first element or undefined if the array is empty.

The function should:

Use a generic type parameter T
Accept one parameter named arr of type Array<T>
Return the first element of type T or undefined
Have an explicit return type annotation of T | undefined
Create the following arrays using the Array<T> syntax:

stringArray of type Array<string> containing ["apple", "banana", "cherry"]
numberArray of type Array<number> containing [10, 20, 30, 40]
booleanArray of type Array<boolean> containing [true, false, true]
emptyStringArray of type Array<string> that is empty
Test your function and print the following outputs:

Print the result of calling getFirstElement with stringArray
Print the result of calling getFirstElement with numberArray
Print the result of calling getFirstElement with booleanArray
Print the result of calling getFirstElement with emptyStringArray
Print the result of calling getFirstElement with a new Array<string> containing ["single"] */

// TODO: Write your code here
// Create the generic function getFirstElement
const getFirstElement = <T>(arr: Array<T>): T | undefined => arr[0] || undefined;
// Create the required arrays using Array<T> syntax
const stringArray: Array<string> = ['apple', 'banana', 'cherry'];
const numberArray: Array<number> = [10, 20, 30, 40];
const booleanArray: Array<boolean> = [true, false, true];
const emptyStringArray: Array<string> = [];
// Test the function and print the results
console.log(getFirstElement(stringArray));
console.log(getFirstElement(numberArray));
console.log(getFirstElement(booleanArray));
console.log(getFirstElement(emptyStringArray));
console.log(getFirstElement(new Array<string>('single')));
