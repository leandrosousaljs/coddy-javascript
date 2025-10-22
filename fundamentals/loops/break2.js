/* Challenge

Write a program that prints numbers from 1 to 20. Your task is to stop the loop when the program encounters the first number divisible by both 3 and 5. */

// Write code here
for (let i = 1; i < 21; i++) {
  console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    break;
  }
}
