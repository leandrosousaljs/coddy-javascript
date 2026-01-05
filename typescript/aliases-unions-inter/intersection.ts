/* Challenge

Create two type aliases: HasName for an object with a name property of type string, and HasAge for an object with an age property of type number.

Create a third type alias called Person by intersecting HasName and HasAge using the & operator.

Create another type alias called HasEmail for an object with an email property of type string.

Create a fourth type alias called Employee by intersecting all three types: HasName, HasAge, and HasEmail.

Now create the following variables:

Create a variable named user of type Person with the name "Alice" and age 25
Create a variable named worker of type Employee with the name "Bob", age 30, and email "bob@company.com"
Create a function named displayPerson that accepts a parameter of type Person and returns a string in the format "Name: [name], Age: [age]".

Create another function named displayEmployee that accepts a parameter of type Employee and returns a string in the format "Name: [name], Age: [age], Email: [email]".

Call both functions with the appropriate variables and print the results on separate lines. */

// TODO: Write your code here
// Create type aliases for HasName, HasAge, HasEmail
type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = { email: string };
// Create Person and Employee types using intersection
type Person = HasName & HasAge;
type Employee = HasName & HasAge & HasEmail;
// Create variables user and worker
let user: Person = {
  name: 'Alice',
  age: 25,
};

let worker: Employee = {
  name: 'Bob',
  age: 30,
  email: 'bob@company.com',
};
// Create displayPerson and displayEmployee functions
const displayPerson = (person: Person): string => `Name: ${person.name}, Age: ${person.age}`;
const displayEmployee = (employee: Employee): string =>
  `Name: ${employee.name}, Age: ${employee.age}, Email: ${employee.email}`;
// Call the functions and print the results
console.log(displayPerson(user));
console.log(displayEmployee(worker));
