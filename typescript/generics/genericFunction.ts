/* Challenge

Create a generic function named wrapInObject that takes an argument of any type and returns an object containing that value.

The function should:

Use a generic type parameter T
Accept one parameter named item of type T
Return an object with a single property value of type T
Have an explicit return type annotation
Create the following variables to test your function:

wrappedString - call wrapInObject with the string "Hello TypeScript"
wrappedNumber - call wrapInObject with the number 42
wrappedBoolean - call wrapInObject with the boolean true
Print the following outputs:

Print wrappedString.value
Print wrappedNumber.value
Print wrappedBoolean.value
Print the result of calling wrapInObject with the string "Generic", accessing the value property
Print the result of calling wrapInObject with the number 100, accessing the value property */

// TODO: Write your code here
// Create the generic function wrapInObject
const wrapInObject = <T>(item: T): { value: T } => ({ value: item });
// TODO: Create the test variables
// wrappedString, wrappedNumber, wrappedBoolean
const wrappedString = wrapInObject('Hello TypeScript');
const wrappedNumber = wrapInObject(42);
const wrappedBoolean = wrapInObject(true);
// Print the outputs
console.log(wrappedString.value);
console.log(wrappedNumber.value);
console.log(wrappedBoolean.value);
console.log(wrapInObject('Generic').value);
console.log(wrapInObject(100).value);
