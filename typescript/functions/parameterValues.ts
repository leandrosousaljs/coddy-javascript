/* Challenge

Create a function named calculateTax that takes two parameters: price of type number (required) and rate of type number with a default value of 0.05. The function should return the tax amount as a number with an explicit return type annotation.

The function should calculate the tax by multiplying the price by the rate.

Create another function named formatGreeting that takes two parameters: name of type string (required) and timeOfDay of type string with a default value of "Hello". The function should return a formatted greeting string with an explicit return type annotation.

The function should return the greeting in the format: "[timeOfDay], [name]!"

Create a third function named calculateShipping that takes three parameters: weight of type number (required), distance of type number (required), and expedited of type boolean with a default value of false. The function should return the shipping cost as a number with an explicit return type annotation.

The function should calculate shipping cost using this formula: (weight * 0.5) + (distance * 0.1). If expedited is true, multiply the result by 2.

Test your functions by calling them with the following values and printing the results:

Call calculateTax with 100 (using default rate)
Call calculateTax with 200 and 0.08
Call formatGreeting with "Alice" (using default time of day)
Call formatGreeting with "Bob" and "Good morning"
Call calculateShipping with 5 and 100 (using default expedited value)
Call calculateShipping with 3, 50, and true
Print each result on a separate line in the order specified above. */

// TODO: Write your code here

// Create the calculateTax function
const calculateTax = (price: number, rate = 0.05): number => price * rate;

// Create the formatGreeting function
const formatGreeting = (name: string, timeOfDay = 'Hello') => `${timeOfDay}, ${name}!`;

// Create the calculateShipping function
const calculateShipping = (weight: number, distance: number, expedited = false) => {
  if (expedited) {
    return (weight * 0.5 + distance * 0.1) * 2;
  }

  return weight * 0.5 + distance * 0.1;
};

// Test the functions and print results
console.log(calculateTax(100));
console.log(calculateTax(200, 0.08));
console.log(formatGreeting('Alice'));
console.log(formatGreeting('Bob', 'Good morning'));
console.log(calculateShipping(5, 100));
console.log(calculateShipping(3, 50, true));
