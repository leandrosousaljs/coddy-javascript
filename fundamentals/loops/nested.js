/* Challenge

Write a program that finds all pairs of numbers that add up to n using numbers from 1 to n - 1.

let n = parseInt(inp); // Don't change this line */

// Write your code below

for (let i = 1; i < n; i++) {
  for (let j = n - 1; j > 0; j--) {
    if (i + j === n) {
      console.log(i, j);
    }
  }
}
