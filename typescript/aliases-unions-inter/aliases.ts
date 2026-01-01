/* Challenge

Create a type alias named UserID for a union type that can be either a string or a number.

Create a type alias named Priority for a union type that can be either a string or a boolean.

Create a type alias named Status for the string type.

Now declare the following variables using your type aliases:

Declare a variable named currentUser of type UserID and assign it the string value "admin123"
Declare a variable named guestUser of type UserID and assign it the number value 42
Declare a variable named taskPriority of type Priority and assign it the string value "high"
Declare a variable named isUrgent of type Priority and assign it the boolean value true
Declare a variable named orderStatus of type Status and assign it the string value "pending"
Print each variable's value on a separate line in the order they were declared above. */

// TODO: Write your code here
// Create type aliases for UserID, Priority, and Status
type UserID = string | number;
type Priority = string | boolean;
type Status = string;
// Then declare the variables and assign the specified values
const currentUser: UserID = 'admin123';
const guestUser: UserID = 42;
const taskPriority: Priority = 'high';
const isUrgent: Priority = true;
const orderStatus: Status = 'pending';
// Print each variable's value
console.log(currentUser);
console.log(guestUser);
console.log(taskPriority);
console.log(isUrgent);
console.log(orderStatus);
