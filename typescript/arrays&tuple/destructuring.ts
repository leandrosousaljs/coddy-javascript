/*Challenge

Create a tuple named employee that holds a number (employee ID) followed by a string (employee name). Initialize it with the ID 1001 and the name "Sarah Johnson".

Use destructuring to extract the values from the employee tuple into two separate variables named empId and empName.

Create another tuple named coordinates that holds two numbers representing latitude and longitude coordinates. Initialize it with the values 40.7128 and -74.0060.

Use destructuring to extract the values from the location tuple into two separate variables named latitude and longitude.

Print the destructured variables in the following order, each on a separate line:

Print the employee ID
Print the employee name
Print the latitude
Print the longitude */

let employee: [number, string] = [1001, 'Sarah Johnson'];
let [empId, empName] = employee;
let coordinates: [number, number] = [40.7128, -74.006];
let [latitude, longitude] = coordinates;

console.log(empId);
console.log(empName);
console.log(latitude);
console.log(longitude);
