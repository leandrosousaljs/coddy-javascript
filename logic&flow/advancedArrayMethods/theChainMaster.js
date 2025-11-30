/* Challenge

Create a function called chainMaster that takes an array of numbers as an argument. The function should use chained array methods to perform the following operations:

Filter out all numbers that are not divisible by 3
Multiply each remaining number by 2
Sort the resulting array in descending order
Return an object with the following properties:
transformedArray: The final array after all operations
sum: The sum of all numbers in the final array
average: The average of all numbers in the final array, rounded to two decimal places
Use appropriate array methods (filter, map, sort, reduce) in your solution. */

function chainMaster(numbers) {
  // Write your code here
  const result = numbers
    .filter(num => num % 3 === 0)
    .map(num => num * 2)
    .sort((a, b) => b - a);

  const sum = result.reduce((a, b) => a + b, 0);

  const average = Number((sum / result.length).toFixed(2));

  return {
    transformedArray: result,
    sum,
    average,
  };
}
