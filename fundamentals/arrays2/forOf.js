/* Challenge

Write a function named countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in the string. Use a for...of loop to iterate over the characters of the string.

For example:

countVowels("hello") should return 2
countVowels("javascript") should return 3 */

function countVowels(str) {
  // Write code here
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (const char of str) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}
