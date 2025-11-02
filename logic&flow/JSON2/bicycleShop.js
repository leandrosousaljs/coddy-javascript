/* Challenge

Create a function named updateBikeInventory that takes one argument, a JSON string inventoryStr.

Parse it into an object, where inventoryStr has a bikes array. Each bike has brand, price, and quantity.

If a bike's quantity is less than 3, add or update a key note with the value "Restock needed" for that bike.

Return the updated object as a JSON string. */

function updateBikeInventory(inventoryStr) {
  let inventory = JSON.parse(inventoryStr);

  for (let i = 0; i < inventory.bikes.length; i++) {
    if (inventory.bikes[i].quantity < 3) {
      inventory.bikes[i].note = 'Restock needed';
    }
  }

  return JSON.stringify(inventory);
}
