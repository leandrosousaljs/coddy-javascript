/* Challenge

Create a program that receives two arrays of numbers as input (given) and prints a new array of all elements that are in the first array but NOT in the second array. */

let arr1 = inp[0].split(', ').map(Number);
let arr2 = inp[1].split(', ').map(Number);
// Write your code below

let newArr = [];

for (const num of arr1) {
  if (arr2.indexOf(num) === -1) {
    newArr.push(num);
  }
}

console.log(newArr);
