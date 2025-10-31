/* Challenge

Create a function named multiplyMatrices that takes two matrices (matrixA and matrixB) and returns their product.

For matrix multiplication:

Each element in the result matrix is the dot product of a row from the first matrix and a column from the second matrix
Matrix A with dimensions (m × n) can only be multiplied with matrix B with dimensions (n × p)
The resulting matrix will have dimensions (m × p)
Example Input:

matrixA = [[1, 2], [3, 4]]
matrixB = [[5, 6], [7, 8]]
Expected Output:

[[19, 22], [43, 50]] */

function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  const result = [];

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}
