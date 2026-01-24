/* Challenge

You are provided with the following from the previous challenge:

The Direction string enum with Up, Down, Left, and Right members
Variables: upDirection, downDirection, leftDirection, and rightDirection
Create a function named move that takes one parameter:

direction of type Direction
The function should:

Print a message in the format "Moving [direction]..." where [direction] is the lowercase version of the enum's string value
Have a return type of void
Create a function named getMovementDescription that takes one parameter:

direction of type Direction
The function should:

Return a string describing the movement based on the direction:
For Direction.Up: return "Going upward"
For Direction.Down: return "Going downward"
For Direction.Left: return "Turning left"
For Direction.Right: return "Turning right"
Have an explicit return type of string
Create a variable named playerDirection of type Direction and assign it Direction.Up.

Print the following outputs:

Call move with Direction.Up
Call move with leftDirection
Call move with playerDirection
Print the result of calling getMovementDescription with Direction.Down
Print the result of calling getMovementDescription with rightDirection
Call move with Direction.Right */

// From previous challenge - Direction enum and variables
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

const upDirection = Direction.Up;
const downDirection = Direction.Down;
const leftDirection = Direction.Left;
const rightDirection = Direction.Right;

// TODO: Write your code here
// Create the move function that takes a Direction parameter and prints "Moving [direction]..."
const move = (direction: Direction): void => console.log(`Moving ${direction.toLowerCase()}...`);
// Create the getMovementDescription function that returns movement descriptions
const getMovementDescription = (direction: Direction): string => {
  if (direction === Direction.Down) {
    return 'Going downward';
  }

  if (direction === Direction.Left) {
    return 'Turning left';
  }

  if (direction === Direction.Right) {
    return 'Turning right';
  }

  return 'Going upward';
};
// Create the playerDirection variable
const playerDirection: Direction = Direction.Up;
// Call the functions and print the required outputs
move(Direction.Up);
move(leftDirection);
move(playerDirection);
console.log(getMovementDescription(Direction.Down));
console.log(getMovementDescription(rightDirection));
move(Direction.Right);
