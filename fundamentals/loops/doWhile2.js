/* Challenge

Write a do...while loop that starts with a variable count set to 10. The loop should:

Print "Counting down: [count]", where [count] is the current value of count.
Decrease count by 2 after each iteration.
Stop when count becomes less than 0 */

let count = 10;

// Add your do...while loop below
do {
  console.log(`Counting down: ${count}`);
  count -= 2;
} while (count >= 0);
