/* Challenge

Write a program that receives an array of numbers as input (given), and prints an array of the numbers that are either below 50 or are divisible by 5. Use the forEach method. */

let arr = inp.split(',').map(Number); // Don't change this line

// Write your code below
let newArr = [];
arr.forEach((number, index) => {
  if (number < 50 || number % 5 === 0) {
    newArr.push(number);
  }
});

console.log(newArr);
