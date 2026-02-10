/* Challenge

Create a function named throwError that demonstrates the never return type by always throwing an error and never returning normally.

The function should:

Take a parameter message of type string
Throw a new Error with the provided message
Have an explicit return type of never
Create a second function named handleOperation that:

Takes two parameters: operation of type string and value of type number
Returns value * 2 if operation is "double"
Returns value / 2 if operation is "half"
Calls throwError with the message "Invalid operation: [operation]" for any other operation
Has an explicit return type of number
Test your functions with the following operations:

Call handleOperation("double", 5) and print the result
Call handleOperation("half", 8) and print the result
Call handleOperation("triple", 3) and print the result (this will throw an error)
Create additional test cases:

Call handleOperation("double", 15) and print the result
Call handleOperation("half", 20) and print the result */

// TODO: Write your code here
// Create the throwError function with never return type
// Create the handleOperation function with number return type
const throwError = (message: string): never => {
  throw new Error(message);
};

const handleOperation = (operation: string, value: number): number => {
  if (operation === 'double') {
    return value * 2;
  }

  if (operation === 'half') {
    return value / 2;
  }

  throwError(`Invalid operation: ${operation}`);
};
// Test the functions with try-catch blocks
try {
  console.log(handleOperation('double', 5));
} catch (error) {
  console.log(`Error: ${(error as Error).message}`);
}

try {
  console.log(handleOperation('half', 8));
} catch (error) {
  console.log(`Error: ${(error as Error).message}`);
}

try {
  console.log(handleOperation('triple', 3));
} catch (error) {
  console.log(`Error: ${(error as Error).message}`);
}

try {
  console.log(handleOperation('double', 15));
} catch (error) {
  console.log(`Error: ${(error as Error).message}`);
}

try {
  console.log(handleOperation('half', 20));
} catch (error) {
  console.log(`Error: ${(error as Error).message}`);
}
