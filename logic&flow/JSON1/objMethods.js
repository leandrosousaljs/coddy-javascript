/* Challenge

Write a function named analyzeShoppingCart that takes a shopping cart object. The shopping cart object contains items as keys and their quantities as values. The function should return an object with the following information:

totalItems: The total number of unique items (number of keys)
totalQuantity: The sum of all quantities */

function analyzeShoppingCart(cart) {
  // Get arrays using Object static methods
  const keys = Object.keys(cart);
  const values = Object.values(cart);

  // 1. totalItems is simply the length of keys
  const totalItems = keys.length;

  // 2. Calculate totalQuantity using a for loop
  let totalQuantity = 0;
  for (let i = 0; i < values.length; i++) {
    totalQuantity += values[i];
  }

  return {
    totalItems: totalItems,
    totalQuantity: totalQuantity,
  };
}
