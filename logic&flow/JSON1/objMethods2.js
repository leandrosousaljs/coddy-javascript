/* Challenge

Create a function named findMostFrequentItem that takes an object where keys are item names and values are quantities. The function should:

Find and return the name of the item with the highest quantity
If there's a tie, return the first item that appears in the object
Example Input:

const inventory = {
  "apple": 15,
  "banana": 8,
  "orange": 12,
  "pear": 15
}
Expected Output:

"apple" */

function findMostFrequentItem(inventory) {
  // Get the entries array to access both keys and values
  const entries = Object.entries(inventory);

  // Initialize variables to track the most frequent item
  let mostFrequentItem = '';
  let highestQuantity = 0;

  // Loop through entries to find the item with highest quantity
  for (let i = 0; i < entries.length; i++) {
    const [item, quantity] = entries[i];

    if (quantity > highestQuantity) {
      highestQuantity = quantity;
      mostFrequentItem = item;
    }
  }

  return mostFrequentItem;
}
