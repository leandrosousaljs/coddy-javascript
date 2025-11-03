/* Challenge

Create a function called removeMultiples that takes two parameters: an array of numbers and a number n. The function should convert the array to a set, and remove all multiples of n from the Set (including n itself if it's in the Set). Finally convert the set to an array and return it.

Multiples are the numbers you get when you multiply a given number (n) by all whole numbers (1, 2, 3, etc.).

For example, if n = 3:

The multiples of 3 are: 3, 6, 9, 12, 15, 18, 21, 24, and so on... */

function removeMultiples(arr, n) {
  let numSet = new Set(arr);
  let tempArray = Array.from(numSet);

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] % n === 0) {
      numSet.delete(tempArray[i]);
    }
  }

  return Array.from(numSet);
}
