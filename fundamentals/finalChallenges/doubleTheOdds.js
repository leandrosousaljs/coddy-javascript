/* Challenge

Write a function named doubleOdds that takes one input:

numbers - an array of numbers.
The function should:

Double only the odd numbers in the array.
Return the resulting array. */

function doubleOdds(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i] * 2);
    } else {
      result.push(numbers[i]);
    }
  }
  return result;
}
