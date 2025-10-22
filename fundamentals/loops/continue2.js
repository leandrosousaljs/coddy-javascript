/* Challenge

Write a program that prints the numbers from 1 to 20. Your task is to skip printing numbers that are multiples of 4 using the continue statement. */

// Write code here

for (let i = 1; i < 21; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}
