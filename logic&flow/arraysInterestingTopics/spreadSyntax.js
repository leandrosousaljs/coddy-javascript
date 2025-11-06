/* Challenge

Create a function called mergeArr that takes two arrays of numbers as arguments. The function should:

Merge the two arrays using the spread operator
Remove any duplicate numbers
Return the resulting array */

function mergeArr(arr1, arr2) {
  // Write your code here
  let merged = new Set([...arr1, ...arr2]);

  return Array.from(merged);
}
