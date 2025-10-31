/* Challenge

Create a function named findMaxInRows that takes a 2D array of numbers (matrix). The function should:

Find the maximum value in each row
Return an array containing these maximum values
For example:

const matrix = [
  [3, 7, 2],
  [9, 1, 5],
  [6, 0, 4]
];
Should return [7, 9, 6] since 7 is the max in row 0, 9 is the max in row 1, and 6 is the max in row 2. */

function findMaxInRows(matrix) {
  const maxValues = [];

  for (let r = 0; r < matrix.length; r++) {
    let rowMax = matrix[r][0]; // Start with first value in row

    for (let c = 1; c < matrix[r].length; c++) {
      if (matrix[r][c] > rowMax) {
        rowMax = matrix[r][c];
      }
    }

    maxValues.push(rowMax);
  }

  return maxValues;
}
