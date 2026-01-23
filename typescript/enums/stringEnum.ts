/* Challenge

Create a string enum named Direction with four members:

Up initialized to "UP"
Down initialized to "DOWN"
Left initialized to "LEFT"
Right initialized to "RIGHT"
Create four variables to demonstrate the enum values:

upDirection of type Direction and assign it Direction.Up
downDirection of type Direction and assign it Direction.Down
leftDirection of type Direction and assign it Direction.Left
rightDirection of type Direction and assign it Direction.Right
Print the following outputs on separate lines:

Print the value of upDirection
Print the value of downDirection
Print the value of leftDirection
Print the value of rightDirection
Print the string value of Direction.Up
Print the string value of Direction.Down */

// TODO: Write your code here
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const upDirection: Direction = Direction.Up;
const downDirection: Direction = Direction.Down;
const leftDirection: Direction = Direction.Left;
const rightDirection: Direction = Direction.Right;

// Print the required outputs
console.log(upDirection);
console.log(downDirection);
console.log(leftDirection);
console.log(rightDirection);
console.log(Direction.Up);
console.log(Direction.Down);
