/* Challenge

Create a function called uniqueElements that takes an array as an argument. The function should return a new array containing only the unique elements from the input array. */

function uniqueElements(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}
