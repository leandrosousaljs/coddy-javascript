/* Challenge

Create a function named sumJagged that receives a jagged array of numbers and returns the total sum of all elements across every row, regardless of row length. */

function sumJagged(jaggedArray) {
  let total = 0;
  for (let r = 0; r < jaggedArray.length; r++) {
    for (let c = 0; c < jaggedArray[r].length; c++) {
      total += jaggedArray[r][c];
    }
  }
  return total;
}
