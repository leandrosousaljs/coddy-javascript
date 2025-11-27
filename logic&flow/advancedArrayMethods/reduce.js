/* Challenge

Create a function named calculateGroceryTotal that takes an array of objects representing grocery items.

Each object has two properties:

name: string (name of the item)
price: number (price of the item)
The function should:

Calculate the total cost of all items
Apply a discount: - If total is above 100, apply 10% discount
If total is above 50 but below or equal to 100, apply 5% discount
No discount for totals of 50 or less.
Return an object containing:

originalTotal: the sum before discount
discount: the amount saved
finalTotal: the final amount after discount */

function calculateGroceryTotal(items) {
  // Write code here

  let originalTotal = items.reduce((acc, item) => acc + item.price, 0);

  let discount = 0;
  if (originalTotal > 100) {
    discount = originalTotal * 0.1;
  } else if (originalTotal > 50) {
    discount = originalTotal * 0.05;
  }

  let finalTotal = originalTotal - discount;

  return {
    originalTotal,
    discount,
    finalTotal,
  };
}
