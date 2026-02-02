/* Challenge

Create a generic function named makePair that takes two arguments of different types and returns them as a tuple.

The function should:

Use two generic type parameters T and U
Accept a parameter first of type T
Accept a parameter second of type U
Return a tuple of type [T, U]
Have an explicit return type annotation
Test your function by creating the following variables:

stringNumberPair - call makePair with "Hello" and 42
booleanStringPair - call makePair with true and "World"
numberBooleanPair - call makePair with 100 and false
Use destructuring to extract values from your tuples:

Destructure stringNumberPair into variables text and num
Destructure booleanStringPair into variables flag and message
Print the following outputs:

Print text
Print num
Print flag
Print message
Print the first element of numberBooleanPair
Print the second element of numberBooleanPair
Print the result of calling makePair with "TypeScript" and 2024, accessing the first element
Print the result of calling makePair with 99 and "bottles", accessing the second element */

// TODO: Write your code here
// Create the generic makePair function with type parameters T and U
// The function should accept two parameters and return a tuple
const makePair = <T, U>(first: T, second: U): [T, U] => [first, second];
// TODO: Test your function by creating the required variables
// stringNumberPair, booleanStringPair, numberBooleanPair
const stringNumberPair = makePair('Hello', 42);
const booleanStringPair = makePair(true, 'World');
const numberBooleanPair = makePair(100, false);
// TODO: Use destructuring to extract values from tuples
// Destructure stringNumberPair and booleanStringPair as specified
const [text, num] = stringNumberPair;
const [flag, message] = booleanStringPair;
// TODO: Print all the required outputs
// Print text, num, flag, message, and the other required values
console.log(text);
console.log(num);
console.log(flag);
console.log(message);
console.log(numberBooleanPair[0]);
console.log(numberBooleanPair[1]);
console.log(makePair('TypeScript', 2024)[0]);
console.log(makePair(99, 'bottles')[1]);
