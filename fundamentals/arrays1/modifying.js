/* Challenge

Create a function named changeElement that receives 3 arguments:

First argument is an array
Second argument is an index
Third argument is a new element
The function will return the modified array by changing the element in an index that is stored in the second argument with the value in the third argument.

For example, with the following arguments: changeElement([1, 2, 3], 0, 9) the function will return [9, 2, 3] */

function changeElement(arr, index, newElement) {
  // Write code here
  arr[index] = newElement;
  return arr;
}
