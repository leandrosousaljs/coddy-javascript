/* Challenge

Create a function named countOccurrences that takes a 2D array of strings matrix and a string target. It should return how many times target appears across all rows and columns. */

function countOccurrences(matrix, target) {
  let count = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === target) {
        count++;
      }
    }
  }
  return count;
}
