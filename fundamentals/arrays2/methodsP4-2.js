/* Challenge

Create a function named transformArray that:

Takes an array of numbers as its only argument.
Removes all numbers less than 10.
Multiplies the remaining numbers by 2. */

function transformArray(arr) {
  return arr.filter(num => num >= 10).map(num => num * 2);
}
