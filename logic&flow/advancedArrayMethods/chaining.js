/* Challenge

Create a function called processFruits that takes an array of fruit objects. Each fruit object has properties name (string) and quantity (number).

The function should use chained array methods to:

Filter out fruits with quantity of 0
Transform each fruit name to uppercase
Create a string that lists all fruits with their quantities like "APPLE: 5, BANANA: 3"
A quick reminder:

You can use the .join(", ") function to convert an array of strings to one single string.

It is possible to chain even the .join() function:

arr.filter(...)
  .map(...)
  .join(...) */

function processFruits(fruits) {
  // Write your code here
  return fruits
    .filter(fruit => fruit.quantity > 0)
    .map(fruit => fruit.name.toUpperCase() + ': ' + fruit.quantity)
    .join(', ');
}
