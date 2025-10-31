/* Challenge

Create a function named findSumPatterns that takes a square matrix (2D array) and:

Calculates and prints the sum of main diagonal elements
Calculates and prints the sum of anti-diagonal elements
Calculates and prints the sum of all border elements (count corner elements only once)
Example Input:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Expected Output:

Main diagonal sum: 15
Anti-diagonal sum: 15
Border sum: 40  */

function findSumPatterns(matrix) {
  const n = matrix.length;

  // Calculate main diagonal sum
  let mainDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    mainDiagonalSum += matrix[i][i];
  }

  // Calculate anti-diagonal sum
  let antiDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    antiDiagonalSum += matrix[i][n - 1 - i];
  }

  // Calculate border sum
  let borderSum = 0;

  // Top and bottom rows (entire rows)
  for (let j = 0; j < n; j++) {
    borderSum += matrix[0][j]; // Top row
    if (n > 1) {
      // Only add bottom row if matrix has more than 1 row
      borderSum += matrix[n - 1][j]; // Bottom row
    }
  }

  // Left and right columns (excluding corners already counted)
  for (let i = 1; i < n - 1; i++) {
    borderSum += matrix[i][0]; // Left column (excluding corners)
    if (n > 1) {
      // Only add right column if matrix has more than 1 column
      borderSum += matrix[i][n - 1]; // Right column (excluding corners)
    }
  }

  // Format and print the results
  console.log(`Main diagonal sum: ${mainDiagonalSum}`);
  console.log(`Anti-diagonal sum: ${antiDiagonalSum}`);
  console.log(`Border sum: ${borderSum}`);
}
