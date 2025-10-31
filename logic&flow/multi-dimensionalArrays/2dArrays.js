/* Challenge

Create a function named getColumn that takes three arguments: a 2D array matrix, an integer numberOfRows, and an integer colIndex. The function should return an array containing all elements in the specified column colIndex. */

function getColumn(matrix, numberOfRows, colIndex) {
  const column = [];
  for (let r = 0; r < numberOfRows; r++) {
    column.push(matrix[r][colIndex]);
  }
  return column;
}
