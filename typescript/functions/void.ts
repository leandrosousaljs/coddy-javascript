/* Challenge

Create a function named displayWelcome that takes a parameter userName of type string and has an explicit return type of void. The function should print a welcome message to the console in the format: "Welcome to our application, [userName]!"

Create another function named logError that takes a parameter errorMessage of type string and has an explicit return type of void. The function should print an error message to the console in the format: "ERROR: [errorMessage]"

Create a third function named processData that takes no parameters and has an explicit return type of void. The function should print the message "Processing data..." to the console, then print "Data processing complete." on a new line.

Test your functions by calling them in the following order:

Call displayWelcome with "Alice"
Call processData with no arguments
Call logError with "Invalid input detected"
Call displayWelcome with "Bob"
Each function call should produce output on separate lines in the order specified above. */

// TODO: Write your code here
// Create the displayWelcome function that takes userName (string) and returns void
// Create the logError function that takes errorMessage (string) and returns void
// Create the processData function that takes no parameters and returns void
const displayWelcome = (userName: string): void => console.log(`Welcome to our application, ${userName}!`);
const logError = (errorMessage: string): void => console.log(`ERROR: ${errorMessage}`);
const processData = (): void => {
  console.log('Processing data...');
  console.log('Data processing complete.');
};
// TODO: Call the functions in the specified order:
// 1. displayWelcome with "Alice"
displayWelcome('Alice');
// 2. processData with no arguments
processData();
// 3. logError with "Invalid input detected"
logError('Invalid input detected');
// 4. displayWelcome with "Bob"
displayWelcome('Bob');
