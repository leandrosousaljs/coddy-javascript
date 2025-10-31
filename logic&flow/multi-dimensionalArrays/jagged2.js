/* Challenge

Create a function named flattenJagged that takes a jagged array as input and returns a new one-dimensional array containing all the elements from the jagged array.

Example Input:

const jaggedArray = [
  [1, 2],
  [3, 4, 5],
  [6]
];
Expected Output:

[1, 2, 3, 4, 5, 6] */

function flattenJagged(jaggedArray) {
  let result = [];

  for (let i = 0; i < jaggedArray.length; i++) {
    for (let j = 0; j < jaggedArray[i].length; j++) {
      result.push(jaggedArray[i][j]);
    }
  }

  return result;
}
