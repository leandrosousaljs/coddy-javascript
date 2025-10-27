/* Challenge

Create a program that receives a string as input (given), and it prints how many times the character p is in the string.

Some chars might be upper cased, use char.toLowerCase() to convert it to lower cased. */

let text = inp;
// Write your code below
let count = 0;

for (const char of text) {
  if (char.toLowerCase() === 'p') {
    count += 1;
  }
}

console.log(count);
