/* Challenge

Easy
Create a generic interface named Result that can hold data of any type along with success information.

The interface should have two properties:

success of type boolean
data of type T (the generic type parameter)
Create the following objects using your generic interface:

stringResult of type Result<string> with success: true and data: "Operation completed"
numberResult of type Result<number> with success: true and data: 42
booleanResult of type Result<boolean> with success: false and data: false
arrayResult of type Result<string[]> with success: true and data: ["item1", "item2", "item3"]
Create a generic function named processResult that:

Uses a generic type parameter T
Takes one parameter result of type Result<T>
Returns a string message
If success is true, returns "Success: [data]"
If success is false, returns "Failed: [data]"
Print the following outputs:

Print the result of calling processResult with stringResult
Print the result of calling processResult with numberResult
Print the result of calling processResult with booleanResult
Print the result of calling processResult with arrayResult
Print stringResult.data */

// TODO: Write your code here

// Create the generic Result interface
interface Result<T> {
  success: boolean;
  data: T;
}
// Create the objects using the Result interface
const stringResult: Result<string> = {
  success: true,
  data: 'Operation completed',
};

const numberResult: Result<number> = {
  success: true,
  data: 42,
};

const booleanResult: Result<boolean> = {
  success: false,
  data: false,
};

const arrayResult: Result<string[]> = {
  success: true,
  data: ['item1', 'item2', 'item3'],
};
// Create the generic processResult function
const processResult = <T>(result: Result<T>): string =>
  result.success ? `Success: ${result.data}` : `Failed: ${result.data}`;
// Print the required outputs
console.log(processResult(stringResult));
console.log(processResult(numberResult));
console.log(processResult(booleanResult));
console.log(processResult(arrayResult));
console.log(stringResult.data);
