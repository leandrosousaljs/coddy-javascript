/* Challenge

Create a program that receives an array of strings as input (given), and prints a new array containing only the words longer than 5 characters */

let arr = inp.split(', '); // Don't change this line
// Write your code below
let myArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    myArray.push(arr[i]);
  }
}

console.log(myArray);
