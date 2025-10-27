/* Challenge

Create a program that receives an array as input (given) and prints the following sliced arrays:

For odd-length arrays: take the middle item and one item on each side (3 items total)
For even-length arrays: take the two middle items
For this challenge, use Math.floor() because array slicing only works with whole numbers. */

let arr = inp.split(', ').map(Number);
// Write your code below
if (arr.length % 2 === 0) {
  console.log(arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2) + 1));
} else {
  console.log(arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2) + 2));
}
