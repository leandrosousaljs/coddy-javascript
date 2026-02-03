/* Challenge

Create a generic interface named InventoryItem that represents the structure of any inventory item in your management system.

The interface should:

Use a generic type parameter T
Have an id property of type number
Have a quantity property of type number
Have a details property of type T
Create the following objects using your generic interface:

bookItem of type InventoryItem<{ title: string; author: string }> with:
id: 1
quantity: 5
details: { title: "TypeScript Guide", author: "John Doe" }
electronicItem of type InventoryItem<{ brand: string; model: string }> with:
id: 2
quantity: 3
details: { brand: "TechCorp", model: "X200" }
clothingItem of type InventoryItem<{ size: string; color: string }> with:
id: 3
quantity: 10
details: { size: "M", color: "Blue" }
Print the following outputs:

Print bookItem.id
Print bookItem.quantity
Print bookItem.details.title
Print bookItem.details.author
Print electronicItem.details.brand
Print electronicItem.details.model
Print clothingItem.details.size
Print clothingItem.details.color */

// TODO: Write your code here
// Create the InventoryItem interface and the required objects
interface InventoryItem<T> {
  id: number;
  quantity: number;
  details: T;
}

const bookItem: InventoryItem<{ title: string; author: string }> = {
  id: 1,
  quantity: 5,
  details: { title: 'TypeScript Guide', author: 'John Doe' },
};

const electronicItem: InventoryItem<{ brand: string; model: string }> = {
  id: 2,
  quantity: 3,
  details: { brand: 'TechCorp', model: 'X200' },
};

const clothingItem: InventoryItem<{ size: string; color: string }> = {
  id: 3,
  quantity: 10,
  details: { size: 'M', color: 'Blue' },
};
// Print the required outputs
console.log(bookItem.id);
console.log(bookItem.quantity);
console.log(bookItem.details.title);
console.log(bookItem.details.author);
console.log(electronicItem.details.brand);
console.log(electronicItem.details.model);
console.log(clothingItem.details.size);
console.log(clothingItem.details.color);
