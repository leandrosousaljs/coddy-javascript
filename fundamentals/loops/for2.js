/* Challenge

Write a program that calculates and prints the multiplication table of 7 (from 1 to 10) using a for loop.

Your program should output each step of the calculation in this format:

7 x i = result
Expected output:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70 */

// Write code here
for (let i = 1; i < 11; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
