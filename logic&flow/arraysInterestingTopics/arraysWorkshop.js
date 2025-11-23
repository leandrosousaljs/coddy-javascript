/* Challenge

Create a function called arrayWorkshop that takes an array of numbers as an argument. The function should perform the following operations:

Remove all duplicate numbers from the array
If the array has fewer than 3 elements after removing duplicates, add the number 0 to the array until it has 3 elements
Replace the first and last elements with their sum
Return the modified array */

function arrayWorkshop(arr) {
  // Write your code here
  let newSet = new Set(arr);
  let newArr = Array.from(newSet);

  if (newArr.length < 3) {
    for (let i = newArr.length; i < 3; i++) {
      newArr.push(0);
    }
  }

  let sum = newArr[0] + newArr[newArr.length - 1];

  newArr[0] = sum;
  newArr[newArr.length - 1] = sum;

  return newArr;
}
