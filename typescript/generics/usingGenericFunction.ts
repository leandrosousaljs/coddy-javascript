/* Challenge

You are provided with the following from the previous challenge:

The generic function wrapInObject<T> that takes an item of type T and returns { value: T }
Call the wrapInObject function using both explicit type arguments and type inference:

Using explicit type arguments:

Create a variable explicitString by calling wrapInObject<string> with "TypeScript"
Create a variable explicitNumber by calling wrapInObject<number> with 25
Create a variable explicitBoolean by calling wrapInObject<boolean> with false
Using type inference:

Create a variable inferredString by calling wrapInObject with "Generics" (let TypeScript infer the type)
Create a variable inferredNumber by calling wrapInObject with 99 (let TypeScript infer the type)
Create a variable inferredBoolean by calling wrapInObject with true (let TypeScript infer the type)
Print the following outputs:

Print explicitString.value
Print explicitNumber.value
Print explicitBoolean.value
Print inferredString.value
Print inferredNumber.value
Print inferredBoolean.value */

// Generic function from previous challenge
const wrapInObject = <T>(item: T): { value: T } => ({ value: item });
// TODO: Write your code here
// Create variables using explicit type arguments
const explicitString = wrapInObject<string>('TypeScript');
const explicitNumber = wrapInObject<number>(25);
const explicitBoolean = wrapInObject<boolean>(false);
// Create variables using type inference
const inferredString = wrapInObject('Generics');
const inferredNumber = wrapInObject(99);
const inferredBoolean = wrapInObject(true);
// Print the results
console.log(explicitString.value);
console.log(explicitNumber.value);
console.log(explicitBoolean.value);
console.log(inferredString.value);
console.log(inferredNumber.value);
console.log(inferredBoolean.value);
