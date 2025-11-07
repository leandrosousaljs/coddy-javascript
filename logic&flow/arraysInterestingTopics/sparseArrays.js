/* Challenge

Create a function called analyzeSparseArray that takes a sparse array as an argument. The function should return an object with the following properties:

length: The total length of the array
elementCount: The number of non-empty elements in the array
largestGap: The size of the largest gap (consecutive empty slots) in the array */

function analyzeSparseArray(arr) {
  // Write your code here
  let elementCount = 0;
  let currentGap = 0;
  let largestGap = 0;

  arr.forEach(n => {
    if (n === undefined) {
      currentGap++;
      if (currentGap > largestGap) largestGap = currentGap;
    } else {
      elementCount++;
      currentGap = 0;
    }
  });

  return {
    length: arr.length,
    elementCount,
    largestGap,
  };
}
