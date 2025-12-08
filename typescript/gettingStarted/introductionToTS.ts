/* Challenge

Create a constant named userId with an explicit type annotation of number and assign it the value 12345.

Create a variable named username with an explicit type annotation of string and assign it the value "john_doe".

You are provided with the following line of code that contains a type error:

username = userId;
Fix this type error by creating a new variable called userIdString that converts the userId to a string using the String() function, then assign userIdString to username instead.

Finally, print both userId and username to the console on separate lines. */

// TODO: Write your code here
// Create the constant userId with type annotation
// Create the variable username with type annotation
// Fix the type error by converting userId to string
// Assign the converted value to username

// Print the results
const userId: number = 12345;
let username: string = 'john_doe';

const userIdString = String(userId);

username = userIdString;

console.log(userId);
console.log(username);
