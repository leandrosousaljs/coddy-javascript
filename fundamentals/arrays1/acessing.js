/* Challenge

Create a function named values that receives an array as an argument and prints all of the items in the array one after the other.

To iterate over an array use the .length property inside the for statement:

let myArray = [10, 20, 30, 40, 50]
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
This way i will iterate from 0 to myArray.length (not including) which is exactly all of the array indices. */

function values(arr) {
  // Write code here
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
