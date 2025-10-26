/* Challenge

Create a function named swapEnds that receives one argument:

An array
The function swaps the first and the last elements of the array and returns the modified array.

For example with the following arguments: swapEnds([1, 2, 3, 4]) the function will return [4, 2, 3, 1] */

function swapEnds(arr) {
  // Write code here
  let first = arr[0];
  let last = arr[arr.length - 1];

  arr.push(first);
  arr.unshift(last);

  return arr;
}
