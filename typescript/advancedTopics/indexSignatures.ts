/* Challenge

Create an interface for a product catalog system where product categories and their stock quantities are stored dynamically.

Create an interface named ProductCatalog that uses an index signature to map string keys (product names) to number values (stock quantities).

Create a function named getStockLevel that:

Takes two parameters: catalog of type ProductCatalog and productName of type string
Returns the stock quantity for the given product name
Returns 0 if the product doesn't exist in the catalog
Has an explicit return type of number
Create a function named updateStock that:

Takes three parameters: catalog of type ProductCatalog, productName of type string, and newQuantity of type number
Updates the stock quantity for the given product
Returns void
Create a function named getTotalStock that:

Takes a parameter catalog of type ProductCatalog
Returns the sum of all stock quantities in the catalog
Has an explicit return type of number
Create test data:

Create inventory of type ProductCatalog with the following products:
"laptop": 15
"mouse": 50
"keyboard": 25
"monitor": 8
Test your functions and print the following outputs:

Call getStockLevel with inventory and "laptop"
Call getStockLevel with inventory and "tablet"
Call getTotalStock with inventory
Call updateStock with inventory, "mouse", and 75
Call updateStock with inventory, "webcam", and 12
Call getStockLevel with inventory and "mouse"
Call getStockLevel with inventory and "webcam"
Call getTotalStock with inventory */

// TODO: Write your code here

// Create the ProductCatalog interface
interface ProductCatalog {
  [key: string]: number;
}
// Create the getStockLevel function
const getStockLevel = (catalog: ProductCatalog, productName: string): number => {
  if (catalog[productName]) return catalog[productName];

  return 0;
};

// Create the updateStock function
const updateStock = (catalog: ProductCatalog, productName: string, newQuantity: number): void => {
  catalog[productName] = newQuantity;
};

// Create the getTotalStock function
const getTotalStock = (catalog: ProductCatalog): number => {
  let total: number = 0;

  for (const k in catalog) {
    total += catalog[k];
  }

  return total;
};

// Create test data - inventory object
let inventory: ProductCatalog = {
  laptop: 15,
  mouse: 50,
  keyboard: 25,
  monitor: 8,
};

// Test the functions and print results
console.log(getStockLevel(inventory, 'laptop'));
console.log(getStockLevel(inventory, 'tablet'));
console.log(getTotalStock(inventory));
updateStock(inventory, 'mouse', 75);
updateStock(inventory, 'webcam', 12);
console.log(getStockLevel(inventory, 'mouse'));
console.log(getStockLevel(inventory, 'webcam'));
console.log(getTotalStock(inventory));
