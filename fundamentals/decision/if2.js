/* Challenge

Create a variable named temperature and set it to 25.

Use if statements to:

If temperature is greater than 30, set a variable message to "Too hot!".
If temperature is less than 10, set message to "Too cold!".
If temperature is between 10 and 30, set message to "Just right!". */

let temperature = 25;
let message = ''; // Set the message based on temperature

if (temperature > 30) {
  message = 'Too hot!';
} else if (temperature < 10) {
  message = 'Too cold!';
} else {
  message = 'Just right!';
}
// Add your if statements below

console.log(message); // This will show the result
