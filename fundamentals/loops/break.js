/* Challenge

You are given a code that prints the numbers from 1 to 20 (including).

Your task is to add if and break statements so that only the numbers from 1 to 8 will be printed, the loop will exit before printing the numbers from 9 to 20. */

for (let i = 1; i <= 20; i++) {
  if (i == 9) {
    break;
  }
  console.log(i);
}
