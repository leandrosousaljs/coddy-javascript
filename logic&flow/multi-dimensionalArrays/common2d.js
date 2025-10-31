/* Challenge

Create a function named printPatterns that takes a square 2D array of integers (matrix) as input and prints the following patterns:

Main Diagonal: Print all elements where the row index equals the column index.
Anti-Diagonal: Print all elements where the sum of the row and column indices equals the size of the matrix minus 1.
Borders: Print the elements of the top, bottom, left, and right borders of the matrix.
The output should look like this:

Main Diagonal: 1 6 11 16 
Anti-Diagonal: 4 7 10 13 
Top Border: 1 2 3 4 
Bottom Border: 13 14 15 16 
Left Border: 1 5 9 13 
Right Border: 4 8 12 16 */

function printPatterns(matrix) {
  const n = matrix.length;

  // Main Diagonal
  let mainDiagonal = [];
  for (let i = 0; i < n; i++) {
    mainDiagonal.push(matrix[i][i]);
  }
  console.log('Main Diagonal:', mainDiagonal.join(' '));

  // Anti-Diagonal
  let antiDiagonal = [];
  for (let i = 0; i < n; i++) {
    antiDiagonal.push(matrix[i][n - 1 - i]);
  }
  console.log('Anti-Diagonal:', antiDiagonal.join(' '));

  // Top Border
  let topBorder = matrix[0];
  console.log('Top Border:', topBorder.join(' '));

  // Bottom Border
  let bottomBorder = matrix[n - 1];
  console.log('Bottom Border:', bottomBorder.join(' '));

  // Left Border
  let leftBorder = [];
  for (let i = 0; i < n; i++) {
    leftBorder.push(matrix[i][0]);
  }
  console.log('Left Border:', leftBorder.join(' '));

  // Right Border
  let rightBorder = [];
  for (let i = 0; i < n; i++) {
    rightBorder.push(matrix[i][n - 1]);
  }
  console.log('Right Border:', rightBorder.join(' '));
}
