/* Challenge

You are given a code that prints the numbers from 1 to 20 (including).

Your task is to add if and continue statements so that only the even numbers will be printed (2, 4, 6, ...). */

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}
