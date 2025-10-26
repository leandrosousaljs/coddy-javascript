/* Challenge

You are given the following array:

let numbers = [40, 10, 30, 20, 50, 30, 10];
Perform the following tasks in order:

Sort the array in ascending order using a method.
Reverse the order of the array using a method.
Find the index of the first occurrence of the number 30 and store it in a variable named firstIndex.
Find the index of the last occurrence of the number 10 and store it in a variable named lastIndex.
Check if the number 100 is included in the array and store the result in a variable named hasHundred.
Finally, print the following:

The updated array after sorting and reversing.
The value of firstIndex.
The value of lastIndex.
The value of hasHundred. */

let numbers = [40, 10, 30, 20, 50, 30, 10];

numbers.sort();
numbers.reverse();
let firstIndex = numbers.indexOf(30);
let lastIndex = numbers.lastIndexOf(10);
let hasHundred = numbers.includes(100);

console.log(numbers);
console.log(firstIndex);
console.log(lastIndex);
console.log(hasHundred);
