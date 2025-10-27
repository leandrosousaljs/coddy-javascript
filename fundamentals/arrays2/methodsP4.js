/* Challenge

You are given an array numbers = [1, 2, 3, 4, 5]. Perform the following steps and print the results directly:

Use map() to create a new array where each number is multiplied by 3, and print the result.
Use filter() to create a new array that only includes numbers greater than 3, and print the result. */

let numbers = [1, 2, 3, 4, 5];

let mapped = numbers.map(num => num * 3);
let filtered = numbers.filter(num => num > 3);

console.log(mapped);
console.log(filtered);
