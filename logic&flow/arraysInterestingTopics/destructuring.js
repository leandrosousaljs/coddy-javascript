/* Challenge

Create a function called analyzeArray that takes an array as an argument. The function should use array destructuring to extract the first, second, and last elements of the array. It should return an object with the following properties:

first: The first element of the array
second: The second element of the array
last: The last element of the array
restLength: The number of remaining elements in the array
If any of these elements don't exist, use default values of null. */

function analyzeArray(arr) {
  // Write your code here
  const [first = null, second = null, ...rest] = arr;
  const last = arr.length >= 3 ? arr[arr.length - 1] : null;

  return {
    first,
    second,
    last,
    restLength: rest.length <= 0 ? 0 : rest.length - 1,
  };
}
