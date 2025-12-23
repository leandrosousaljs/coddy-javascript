/* Challenge

Create a function named addToShoppingList that takes two parameters: a tuple of type [string, number] representing an item (name and quantity), and an array of strings representing the current shopping list.

The function should extract the item name from the tuple and add it to the shopping list array. The function should return the updated shopping list as a new array (without modifying the original array).

Test your function with the following data:

Create a tuple named groceryItem with the values "apples" and 5
Create an array named currentList with the values ["bread", "milk", "eggs"]
Call your function with these parameters and store the result in a variable named updatedList
Print the updated shopping list to the console.

Then test the function again with:

Create another tuple named bakeryItem with the values "cookies" and 2
Call your function using the updatedList from the previous step and the new bakeryItem
Store this result in a variable named finalList
Print the final shopping list to the console. */

// TODO: Write your code here
// Create the addToShoppingList function that takes a tuple and array as parameters

// Test data
const groceryItem: [string, number] = ['apples', 5];
const currentList: string[] = ['bread', 'milk', 'eggs'];

const addToShoppingList = (item: readonly [string, number], arr: string[]): string[] => {
  return [...arr, item[0]];
};
// TODO: Call your function and store the result in updatedList
let updatedList = addToShoppingList(groceryItem, currentList);
// TODO: Print the updated shopping list
console.log(updatedList);
// Second test
const bakeryItem: [string, number] = ['cookies', 2];

// TODO: Call your function again using updatedList and bakeryItem, store in finalList
console.log(addToShoppingList(bakeryItem, updatedList));
// TODO: Print the final shopping list
