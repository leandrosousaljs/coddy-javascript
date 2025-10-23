/* Challenge

Write a function findMax that takes three arguments, compares them, and returns the largest number. */

// Write code here

function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
