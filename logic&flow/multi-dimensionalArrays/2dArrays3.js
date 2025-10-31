/* Challenge

Create a function mirrorRows that takes a 2D array matrix as an argument and returns a new 2D array in which each row is reversed. */

function mirrorRows(matrix) {
  const mirrored = [];
  for (let r = 0; r < matrix.length; r++) {
    // Reverse each row
    const reversedRow = [...matrix[r]].reverse();
    mirrored.push(reversedRow);
  }
  return mirrored;
}
