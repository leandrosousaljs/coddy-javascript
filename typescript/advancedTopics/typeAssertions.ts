/* Challenge

Create a function that processes data from an external API simulation. You'll work with values of type unknown and use type assertions to safely access their properties.

Create a variable apiResponse of type unknown and assign it the following JSON string:

{"userId": 42, "username": "alice_dev", "isActive": true}
Create a function named processUserData that:

Takes a parameter data of type unknown
Uses a type assertion to treat data as a string
Parses the JSON string using JSON.parse()
Uses another type assertion to treat the parsed result as an object with properties userId (number), username (string), and isActive (boolean)
Returns a formatted string: "User [userId]: [username] (Active: [isActive])"
Has an explicit return type of string
Create additional test data:

Create secondApiResponse of type unknown with the JSON string: {"userId": 15, "username": "bob_admin", "isActive": false}
Create thirdApiResponse of type unknown with the JSON string: {"userId": 99, "username": "charlie_user", "isActive": true}
Test your function and print the following outputs:

Call processUserData with apiResponse and print the result
Call processUserData with secondApiResponse and print the result
Call processUserData with thirdApiResponse and print the result */

// Create the API response variables
const apiResponse: unknown = '{"userId": 42, "username": "alice_dev", "isActive": true}';
const secondApiResponse: unknown = '{"userId": 15, "username": "bob_admin", "isActive": false}';
const thirdApiResponse: unknown = '{"userId": 99, "username": "charlie_user", "isActive": true}';

// TODO: Create the processUserData function here
const processUserData = (data: unknown): string => {
  const jsonString = data as string;

  const parsedData = JSON.parse(jsonString) as {
    userId: number;
    username: string;
    isActive: boolean;
  };

  return `User ${parsedData.userId}: ${parsedData.username} (Active: ${parsedData.isActive})`;
};

// Test the function and print results
console.log(processUserData(apiResponse));
console.log(processUserData(secondApiResponse));
console.log(processUserData(thirdApiResponse));
