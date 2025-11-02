/* Challenge

Create a function named processCart that takes a JSON string representing a shopping cart. The cart contains an array of products with names and prices. Your task is to:

Parse the JSON string into a JavaScript object
Create TWO separate carts from it
In the second cart:
Add a discounted property to each item set to false
Apply a 10% discount to all items that have price greater than 50
Set 'discounted' to true for items that received the discount
Return an array containing both carts */

function processCart(jsonString) {
  // Parse JSON string into object
  let originalCart = JSON.parse(jsonString);

  // Create second cart
  let secondCart = JSON.parse(jsonString);

  for (let i = 0; i < secondCart.length; i++) {
    secondCart[i].discounted = false;

    if (secondCart[i].price > 50) {
      secondCart[i].price = secondCart[i].price * 0.9;
      secondCart[i].discounted = true;
    }
  }

  return [originalCart, secondCart];
}
