/* Challenge

Create a type alias named Success for an object with a status property of literal type "success" and a data property of type any.

Create a type alias named Failure for an object with a status property of literal type "error" and a message property of type string.

Create a type alias named Result that is a union of the Success and Failure types.

Create a function named processResult that accepts a parameter called result of type Result and returns a string. The function should use a type guard on the status property to determine the result type and behave as follows:

If the status is "success", return "Operation successful: [data]"
If the status is "error", return "Operation failed: [message]"
Create another function named handleApiResponse that accepts a parameter called response of type Result and returns a boolean. The function should return true if the operation was successful and false if it failed.

The following inputs will be provided:

First input: a JSON string representing either a success result like {"status": "success", "data": "User created"} or a failure result like {"status": "error", "message": "Invalid credentials"}
Second input: another JSON string in the same format
Parse both JSON inputs as Result objects, then:

Call processResult with the first parsed result and print the returned string
Call handleApiResponse with the first parsed result and print the returned boolean
Call processResult with the second parsed result and print the returned string
Call handleApiResponse with the second parsed result and print the returned boolean */

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on('line', (line: string) => {
  input.push(line.trim());
  if (input.length === 2) {
    // Parse the JSON inputs
    const result1 = JSON.parse(input[0]);
    const result2 = JSON.parse(input[1]);

    // TODO: Write your code here
    // 1. Create type aliases for Success, Failure, and Result
    type Success = {
      status: 'success';
      data: any;
    };
    type Failure = {
      status: 'error';
      message: string;
    };
    type Result = Success | Failure;
    // 2. Create the processResult function
    const processResult = (result: Result): string => {
      if (result.status === 'error') {
        return `Operation failed: ${result.message}`;
      }

      return `Operation successful: ${result.data}`;
    };
    // 3. Create the handleApiResponse function
    const handleApiResponse = (response: Result): boolean => response.status === 'success';
    // 4. Call the functions with the parsed results and print the outputs
    console.log(processResult(result1));
    console.log(handleApiResponse(result1));
    console.log(processResult(result2));
    console.log(handleApiResponse(result2));
    rl.close();
  }
});
