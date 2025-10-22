/* Challenge

Write a program that finds all pairs of factors of n using numbers from 1 to n. */

let n = parseInt(inp); // Don't change this line

// Write your code below

for (let i = 1; i <= n; i++) {
  for (let j = n; j > 0; j--) {
    if (i * j === n) {
      console.log(i, j);
    }
  }
}
