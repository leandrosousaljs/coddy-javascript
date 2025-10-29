/* Challenge

Each test case has one input - an odd whole number. (given)
Your task is to print n - pyramid using *, here are some examples:

1 - pyramid
*
5 - pyramid
*
***
*****
7 - pyramid
*
***
*****
*******
Input
odd integer n from user
1 <= n < 1000 */

let n = parseInt(inp); // Don't change this line

let rows = parseInt(n / 2) + 1;
for (let i = 0; i < rows; i++) {
  let stars = '';
  stars += '*'.repeat(2 * (i + 1) - 1);
  console.log(stars);
}
