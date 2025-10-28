/* Challenge

1.Let's create the Grocery List Tracker helps you manage a shopping list using an array. You can:

Add items to the list.
Remove specific items.
View the entire list with item numbers.
For starters, create an empty list that will hold the ingredients, you can name it however you like!

2.Add a function named addItem that gets a string (the item) and pushes it into the ingredients list.

In the end, the function will output:

Milk added to the grocery list.
For the input "Milk".

Add the following code at the end of your code to test it:

addItem("Milk");
addItem("Bread");
addItem("Eggs");

3.Add a function named removeItem that gets a string (the item) and removes it from the list.

In the end, the function will output:

Milk removed from the grocery list.
For the input "Milk".

And if the item does not exist in the list:

Milk is not in the grocery list.

Add the following code at the end of your code to test it (instead of the previous testing code):

addItem("Milk");
addItem("Bread");
addItem("Eggs");
removeItem("Bread");
removeItem("Cheese");

4.Add a function named viewList that gets no arguments and prints the grocery list.

The function will output:

Grocery List:
1. Milk
2. Eggs
3. Butter
For a list with the following items ["Milk", "Eggs", "Butter"].

If the list is empty output:

The grocery list is empty.

Add the following code at the end of your code to test it (instead of the previous testing code):

viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese"); */

// Grocery list array
let groceryList = [];

// Function to add an item to the grocery list
function addItem(item) {
  groceryList.push(item);
  console.log(`${item} added to the grocery list.`);
}

// Function to remove an item from the grocery list
function removeItem(item) {
  const index = groceryList.indexOf(item);
  if (index !== -1) {
    groceryList.splice(index, 1);
    console.log(`${item} removed from the grocery list.`);
  } else {
    console.log(`${item} is not in the grocery list.`);
  }
}

// Function to view the current grocery list
function viewList() {
  if (groceryList.length === 0) {
    console.log('The grocery list is empty.');
  } else {
    console.log('Grocery List:');
    groceryList.forEach((item, index) => console.log(`${index + 1}. ${item}`));
  }
}

viewList();
addItem('Milk');
addItem('Bread');
addItem('Eggs');
viewList();
removeItem('Bread');
viewList();
removeItem('Cheese');
