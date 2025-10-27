/* Challenge

Write a function named countDigits that takes a string as an argument and returns the number of digits (0-9) in the string. Use a for...of loop to iterate over the characters of the string.

For example:

countDigits("hello123world") should return 3
countDigits("2020year") should return 4 */

// Write code here

function countDigits(str) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let count = 0;

  for (const char of str) {
    if (digits.includes(char)) {
      count += 1;
    }
  }
  return count;
}
