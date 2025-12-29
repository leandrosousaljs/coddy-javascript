/* Challenge

Create a function named sumAll that uses rest parameters to accept any number of numeric arguments and returns their sum as a number. The function should have an explicit return type annotation.

Create another function named findMaximum that uses rest parameters to accept any number of numeric arguments and returns the largest value among them as a number. The function should have an explicit return type annotation.

Create a third function named concatenateStrings that takes a required separator parameter of type string, followed by rest parameters that accept any number of string arguments. The function should return all the string arguments joined together with the separator between them. The function should have an explicit return type annotation of string.

Test your functions by calling them with the following values and printing the results:

Call sumAll with 5, 10, and 15
Call sumAll with 1, 2, 3, 4, and 5
Call findMaximum with 8, 3, 12, and 7
Call findMaximum with 25 and 18
Call concatenateStrings with "-" as separator and "apple", "banana", "cherry"
Call concatenateStrings with " | " as separator and "red", "green", "blue", "yellow"
Print each result on a separate line in the order specified above. */

// TODO: Write your code here

// Create the sumAll function with rest parameters
const sumAll = (...num: number[]): number => num.reduce((num, acc) => num + acc, 0);

// Create the findMaximum function with rest parameters
const findMaximum = (...num: number[]): number => Math.max(...num);

// Create the concatenateStrings function with separator and rest parameters
const concatenateStrings = (separator: string, ...values: string[]): string => values.join(separator);

// Test the functions and print results
console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings('-', 'apple', 'banana', 'cherry'));
console.log(concatenateStrings(' | ', 'red', 'green', 'blue', 'yellow'));
