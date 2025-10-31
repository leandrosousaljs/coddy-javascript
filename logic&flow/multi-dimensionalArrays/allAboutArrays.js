/* Challenge

Create a function stackMatrices that receives an array of 2D arrays matrixList (which is essentially a 3D array). All these arrays share the same number of columns. The function should combine them vertically into one 2D array, appending rows from each 2D array in sequence. */

function stackMatrices(matrixList) {
  const merged = [];
  for (let i = 0; i < matrixList.length; i++) {
    // Append all rows of the current matrix to merged
    for (let r = 0; r < matrixList[i].length; r++) {
      merged.push(matrixList[i][r]);
    }
  }
  return merged;
}
