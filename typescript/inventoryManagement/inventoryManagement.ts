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

2.Create a generic function named addItem that adds a new item to an existing inventory array.

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

3.Create a generic function named findItemById that searches for an item in an inventory array by its ID.

The function should:

Use a generic type parameter T
Accept a parameter inventory of type InventoryItem<T>[]
Accept a parameter id of type number
Return the found item of type InventoryItem<T> or undefined if not found
Have an explicit return type annotation of InventoryItem<T> | undefined
Create test inventories:

Create mixedBookInventory as an array containing:
An item with id: 10, quantity: 3, details: { title: "JavaScript Basics", author: "Alice Brown" }
An item with id: 11, quantity: 7, details: { title: "React Fundamentals", author: "Bob Wilson" }
An item with id: 12, quantity: 2, details: { title: "Node.js Guide", author: "Carol Davis" }
Create mixedElectronicInventory as an array containing:
An item with id: 20, quantity: 5, details: { brand: "Samsung", model: "Galaxy S23" }
An item with id: 21, quantity: 1, details: { brand: "Apple", model: "iPhone 15" }
Test your function and print the following outputs:

Find item with ID 11 in mixedBookInventory and print the result's details.title (or undefined if not found)
Find item with ID 20 in mixedElectronicInventory and print the result's details.brand (or undefined if not found)
Find item with ID 99 in mixedBookInventory and print the result (should be undefined)
Find item with ID 12 in mixedBookInventory and print the result's quantity (or undefined if not found)
Find item with ID 21 in mixedElectronicInventory and print the result's details.model (or undefined if not found)
Find item with ID 10 in mixedBookInventory and print the result's id (or undefined if not found)
Find item with ID 50 in mixedElectronicInventory and print the result (should be undefined)

4.Create two specific object types and their corresponding inventory item type aliases:

Create a type alias Book with properties:
title of type string
author of type string
Create a type alias Electronic with properties:
brand of type string
model of type string
Create type aliases for specific inventory items:

Create BookItem as InventoryItem<Book>
Create ElectronicItem as InventoryItem<Electronic>
Create concrete inventory items using your new type aliases:

Create specificBook of type BookItem with:
id: 100
quantity: 8
details: { title: "Clean Code", author: "Robert Martin" }
Create specificElectronic of type ElectronicItem with:
id: 200
quantity: 4
details: { brand: "Sony", model: "WH-1000XM4" }
Create typed inventory arrays:

Create bookStore of type BookItem[] containing specificBook
Create electronicStore of type ElectronicItem[] containing specificElectronic
Create additional items and test your type system:

Create anotherBook of type BookItem with:
id: 101
quantity: 3
details: { title: "Design Patterns", author: "Gang of Four" }
Use addItem to add anotherBook to bookStore and store in expandedBookStore
Print the following outputs:

Print specificBook.details.title
Print specificBook.details.author
Print specificElectronic.details.brand
Print specificElectronic.details.model
Print the length of expandedBookStore
Use findItemById to find item with ID 101 in expandedBookStore and print the result's details.title
Use findItemById to find item with ID 200 in electronicStore and print the result's quantity
Print expandedBookStore[1].details.author
*/

// TODO: Write your code here
// Create the InventoryItem interface and the required objects
interface InventoryItem<T> {
  id: number;
  quantity: number;
  details: T;
}

type Book = {
  title: string;
  author: string;
};

type Electronic = {
  brand: string;
  model: string;
};

type BookItem = InventoryItem<Book>;

type ElectronicItem = InventoryItem<Electronic>;

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

const findItemById = <T>(inventory: InventoryItem<T>[], id: number): InventoryItem<T> | undefined =>
  inventory.find(item => item.id === id);

const mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [
  {
    id: 10,
    quantity: 3,
    details: { title: 'JavaScript Basics', author: 'Alice Brown' },
  },
  {
    id: 11,
    quantity: 7,
    details: { title: 'React Fundamentals', author: 'Bob Wilson' },
  },
  {
    id: 12,
    quantity: 2,
    details: { title: 'Node.js Guide', author: 'Carol Davis' },
  },
];

const mixedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = [
  {
    id: 20,
    quantity: 5,
    details: { brand: 'Samsung', model: 'Galaxy S23' },
  },
  {
    id: 21,
    quantity: 5,
    details: { brand: 'Apple', model: 'iPhone 15' },
  },
];

const specificBook: BookItem = {
  id: 100,
  quantity: 8,
  details: { title: 'Clean Code', author: 'Robert Martin' },
};

const specificElectronic: ElectronicItem = {
  id: 200,
  quantity: 4,
  details: { brand: 'Sony', model: 'WH-1000XM4' },
};

const bookStore: BookItem[] = [specificBook];
const electronicStore: ElectronicItem[] = [specificElectronic];

const anotherBook: BookItem = {
  id: 101,
  quantity: 3,
  details: { title: 'Design Patterns', author: 'Gang of Four' },
};

const expandedBookStore = addItem(bookStore, anotherBook);
// Print the required outputs
console.log(specificBook.details.title);
console.log(specificBook.details.author);
console.log(specificElectronic.details.brand);
console.log(specificElectronic.details.model);
console.log(expandedBookStore.length);
console.log(findItemById(expandedBookStore, 101).details.title);
console.log(findItemById(electronicStore, 200).quantity);
console.log(expandedBookStore[1].details.author);
