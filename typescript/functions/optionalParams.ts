/* Challenge

Create a function named createUserProfile that takes two parameters: username of type string (required) and displayName of type string (optional). The function should return a string with an explicit return type annotation.

When both parameters are provided, the function should return: "Profile: [displayName] (@[username])"

When only the username is provided, the function should return: "Profile: @[username]"

Create another function named calculateDiscount that takes two parameters: price of type number (required) and membershipLevel of type string (optional). The function should return a number with an explicit return type annotation.

When both parameters are provided, the function should return the price reduced by 10% (multiply by 0.9).

When only the price is provided, the function should return the original price unchanged.

Test your functions by calling them with the following values and printing the results:

Call createUserProfile with "john_doe" and "John Doe"
Call createUserProfile with only "jane_smith"
Call calculateDiscount with 100 and "premium"
Call calculateDiscount with only 75
Print each result on a separate line in the order specified above. */

// TODO: Write your code here
// Create the createUserProfile function with proper type annotations
const createUserProfile = (username: string, displayName?: string): string => {
  if (displayName) {
    return `Profile: ${displayName} (@${username})`;
  }

  return `Profile: @${username}`;
};
// Create the calculateDiscount function with proper type annotations
const calculateDiscount = (price: number, membershipLevel?: string): number => {
  if (membershipLevel) {
    return price * 0.9;
  }

  return price;
};
// Test the functions and print the results
console.log(createUserProfile('john_doe', 'John Doe'));
console.log(createUserProfile('jane_smith'));
console.log(calculateDiscount(100, 'premium'));
console.log(calculateDiscount(75));
