/* Challenge

Create a type alias named Direction for the literal types "left" | "right" | "up" | "down".

Create a type alias named GameState for the literal types "menu" | "playing" | "paused" | "gameover".

Create a type alias named Difficulty for the literal types "easy" | "medium" | "hard".

Now declare the following variables using your type aliases:

Declare a variable named playerDirection of type Direction and assign it the value "up"
Declare a variable named currentState of type GameState and assign it the value "playing"
Declare a variable named selectedDifficulty of type Difficulty and assign it the value "medium"
Create a function named movePlayer that accepts a parameter called direction of type Direction and returns a string. The function should return a message in the format "Moving [direction]".

Create another function named updateGameState that accepts a parameter called state of type GameState and returns a string. The function should return a message in the format "Game state: [state]".

Call your functions with the variables you created and print the results:

Call movePlayer with playerDirection and print the result
Call updateGameState with currentState and print the result
Print the value of selectedDifficulty
Print each result on a separate line in the order specified above. */

// TODO: Write your code here
// Create type aliases for Direction, GameState, and Difficulty
type Direction = 'left' | 'right' | 'up' | 'down';
type GameState = 'menu' | 'playing' | 'paused' | 'gameover';
type Difficulty = 'easy' | 'medium' | 'hard';
// Declare variables using your type aliases
let playerDirection: Direction = 'up';
let currentState: GameState = 'playing';
let selectedDifficulty: Difficulty = 'medium';
// Create the movePlayer and updateGameState functions
const movePlayer = (direction: Direction): string => `Moving ${direction}`;
const updateGameState = (state: GameState): string => `Game state: ${state}`;
// Call the functions and print the results
console.log(movePlayer(playerDirection));
console.log(updateGameState(currentState));
console.log(selectedDifficulty);
