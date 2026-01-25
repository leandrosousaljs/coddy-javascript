/* Challenge

Create a heterogeneous enum named ResponseCode that mixes string and numeric values:

Success initialized to 200
Error initialized to "ERROR"
NotFound initialized to 404
Timeout initialized to "TIMEOUT"
Create a function named handleResponse that takes one parameter:

code of type ResponseCode
The function should:

Check the response code and print different messages based on the value
If the code is ResponseCode.Success, print "Request successful"
If the code is ResponseCode.Error, print "General error occurred"
If the code is ResponseCode.NotFound, print "Resource not found"
If the code is ResponseCode.Timeout, print "Request timed out"
Have a return type of void
Create four variables to demonstrate the enum values:

successCode of type ResponseCode and assign it ResponseCode.Success
errorCode of type ResponseCode and assign it ResponseCode.Error
notFoundCode of type ResponseCode and assign it ResponseCode.NotFound
timeoutCode of type ResponseCode and assign it ResponseCode.Timeout
Print the following outputs:

Print the value of successCode
Print the value of errorCode
Print the value of notFoundCode
Print the value of timeoutCode
Call handleResponse with ResponseCode.Success
Call handleResponse with errorCode
Call handleResponse with the numeric value 404 */

// TODO: Write your code here

// Create the ResponseCode enum
enum ResponseCode {
  Success = 200,
  Error = 'ERROR',
  NotFound = 404,
  Timeout = 'TIMEOUT',
}
// Create the handleResponse function
const handleResponse = (code: ResponseCode): void => {
  if (code === ResponseCode.Success) {
    return console.log('Request successful');
  }

  if (code === ResponseCode.Error) {
    return console.log('General error occurred');
  }

  if (code === ResponseCode.NotFound) {
    return console.log('Resource not found');
  }

  return console.log('Request timed out');
};
// Create the demonstration variables
const successCode: ResponseCode = ResponseCode.Success;
const errorCode: ResponseCode = ResponseCode.Error;
const notFoundCode: ResponseCode = ResponseCode.NotFound;
const timeoutCode: ResponseCode = ResponseCode.Timeout;
// Print the required outputs
console.log(successCode);
console.log(errorCode);
console.log(notFoundCode);
console.log(timeoutCode);
handleResponse(ResponseCode.Success);
handleResponse(errorCode);
handleResponse(404);
