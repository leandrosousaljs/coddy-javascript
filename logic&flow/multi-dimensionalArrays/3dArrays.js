/* Challenge

Create a function named countAllStrings that receives a 3D array of strings and returns the total number of elements across all dimensions. */

function countAllStrings(arr3D) {
  let totalCount = 0;
  for (let x = 0; x < arr3D.length; x++) {
    for (let r = 0; r < arr3D[x].length; r++) {
      totalCount += arr3D[x][r].length;
    }
  }
  return totalCount;
}
