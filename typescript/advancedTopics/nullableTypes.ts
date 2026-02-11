/* Challenge

Create a function that safely processes user profile data that might contain null values. This challenge demonstrates how strictNullChecks forces you to handle nullable types explicitly.

Create a function named getUserDisplayName that:

Takes a parameter fullName of type string | null
Returns the full name if it's not null
Returns "Anonymous User" if the full name is null
Has an explicit return type of string
Create a second function named formatUserEmail that:

Takes a parameter email of type string | null
Returns the email in lowercase if it's not null
Returns "No email provided" if the email is null
Has an explicit return type of string
Create a third function named getUserInfo that:

Takes two parameters: name of type string | null and email of type string | null
Uses both previous functions to process the parameters
Returns a formatted string: "Name: [processed name], Email: [processed email]"
Has an explicit return type of string
Test your functions with the following data:

Call getUserDisplayName("John Smith") and print the result
Call getUserDisplayName(null) and print the result
Call formatUserEmail("ALICE@EXAMPLE.COM") and print the result
Call formatUserEmail(null) and print the result
Call getUserInfo("Bob Johnson", "bob@test.com") and print the result
Call getUserInfo(null, null) and print the result
Call getUserInfo("Sarah Wilson", null) and print the result */

// TODO: Write your code here
// Create the getUserDisplayName function that takes fullName (string | null) and returns string
const getUserDisplayName = (fullName: string | null): string => (fullName ? fullName : 'Anonymous User');
// Create the formatUserEmail function that takes email (string | null) and returns string
const formatUserEmail = (email: string | null): string => (email ? email.toLowerCase() : 'No email provided');
// Create the getUserInfo function that takes name and email (both string | null) and returns string
const getUserInfo = (name: string | null, email: string | null): string => {
  const processedName = getUserDisplayName(name);
  const processedEmail = formatUserEmail(email);

  return `Name: ${processedName}, Email: ${processedEmail}`;
};
// Test the functions and print the results
console.log(getUserDisplayName('John Smith'));
console.log(getUserDisplayName(null));
console.log(formatUserEmail('ALICE@EXAMPLE.COM'));
console.log(formatUserEmail(null));
console.log(getUserInfo('Bob Johnson', 'bob@test.com'));
console.log(getUserInfo(null, null));
console.log(getUserInfo('Sarah Wilson', null));
