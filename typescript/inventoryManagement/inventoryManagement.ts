/* Challenge

1.Create a generic interface named InventoryItem that represents the structure of any inventory item in your management system.

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
Print clothingItem.details.color 

2.You are provided with the following from the previous challenge:

The generic interface InventoryItem<T> with properties id, quantity, and details
Three inventory items: bookItem, electronicItem, and clothingItem
Create a generic function named addItem that adds a new item to an existing inventory array.

The function should:

Use a generic type parameter T
Accept a parameter inventory of type InventoryItem<T>[]
Accept a parameter newItem of type InventoryItem<T>
Return a new array of type InventoryItem<T>[] containing all existing items plus the new item
Have an explicit return type annotation
Create the following arrays and test your function:

Create bookInventory as an array containing only bookItem
Create newBook of type InventoryItem<{ title: string; author: string }> with:
id: 4
quantity: 2
details: { title: "Advanced TypeScript", author: "Jane Smith" }
Use addItem to add newBook to bookInventory and store the result in updatedBookInventory
Create electronicInventory as an array containing only electronicItem
Create newElectronic of type InventoryItem<{ brand: string; model: string }> with:
id: 5
quantity: 1
details: { brand: "GadgetCorp", model: "Z500" }
Use addItem to add newElectronic to electronicInventory and store the result in updatedElectronicInventory
Print the following outputs:

Print the length of updatedBookInventory
Print updatedBookInventory[1].details.title
Print updatedBookInventory[1].details.author
Print the length of updatedElectronicInventory
Print updatedElectronicInventory[1].details.brand
Print updatedElectronicInventory[1].details.model
Print updatedElectronicInventory[0].id
Print updatedElectronicInventory[1].quantity
*/

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

const addItem = <T>(inventory: InventoryItem<T>[], newItem: InventoryItem<T>): InventoryItem<T>[] => {
  return [...inventory, newItem];
};

const bookInventory = [bookItem];

const newBook: InventoryItem<{ title: string; author: string }> = {
  id: 4,
  quantity: 2,
  details: { title: 'Advanced TypeScript', author: 'Jane Smith' },
};

const updatedBookInventory = addItem(bookInventory, newBook);

const electronicInventory = [electronicItem];

const newElectronic: InventoryItem<{ brand: string; model: string }> = {
  id: 5,
  quantity: 1,
  details: { brand: 'GadgetCorp', model: 'Z500' },
};

const updatedElectronicInventory = addItem(electronicInventory, newElectronic);
// Print the required outputs
console.log(updatedBookInventory.length);
console.log(updatedBookInventory[1].details.title);
console.log(updatedBookInventory[1].details.author);
console.log(updatedElectronicInventory.length);
console.log(updatedElectronicInventory[1].details.brand);
console.log(updatedElectronicInventory[1].details.model);
console.log(updatedElectronicInventory[0].id);
console.log(updatedElectronicInventory[1].quantity);
