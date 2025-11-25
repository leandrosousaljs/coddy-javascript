/* Challenge

Create a function called transformData that takes an array of product objects. Each product has a name (string) and price (number). Use the map() method to transform each product as follows:

Make the name all uppercase
Apply a 15% discount to the price (round to 2 decimal places)
Add a new property called onSale set to true
Return the new array of transformed products.

Example Input:

[
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 300 }
]
Expected Output:

[
  { name: "LAPTOP", price: 850.00, onSale: true },
  { name: "PHONE", price: 425.00, onSale: true },
  { name: "TABLET", price: 255.00, onSale: true }
] */

function transformData(products) {
  // Write your solution using map()
  return products.map(product => {
    return {
      name: product.name.toUpperCase(),
      price: Number((product.price * 0.85).toFixed(2)),
      onSale: true,
    };
  });
}
