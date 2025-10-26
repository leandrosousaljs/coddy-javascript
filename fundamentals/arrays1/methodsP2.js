/* Challenge

Create a function named findElement that receives two arguments:

An array of numbers
A number to search for
The function should do the following:

Check if the array includes the number using the includes method.
If the number is found, return the index of its first occurrence using the indexOf method.
If the number is not found, return -1.
For example:

findElement([1, 2, 3, 4, 5], 3) should return 2
findElement([1, 2, 3, 4, 5], 6) should return -1 */

function findElement(arr, num) {
  // Write code here
  if (arr.includes(num)) {
    return arr.indexOf(num);
  } else {
    return -1;
  }
}
