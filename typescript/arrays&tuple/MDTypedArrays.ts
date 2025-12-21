/* Challenge

Create a 2D array named gameGrid that can hold numbers and initialize it as a 3x3 matrix with the following values:

First row: 1, 2, 3
Second row: 4, 5, 6
Third row: 7, 8, 9
Create another 2D array named chessBoard that can hold strings and initialize it as a 2x2 matrix with the following values:

First row: "white", "black"
Second row: "black", "white"
Access and print the element at the second row, first column of the gameGrid array.

Access and print the element at the first row, second column of the chessBoard array.

Print each value on a separate line in the order specified above. */

// Create the gameGrid 2D array (3x3 matrix with numbers 1-9)
let gameGrid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Create the chessBoard 2D array (2x2 matrix with string values)
let chessBoard: string[][] = [
  ['white', 'black'],
  ['black', 'white'],
];
// Access and print the element at second row, first column of gameGrid
console.log(gameGrid[1][0]);
// Access and print the element at first row, second column of chessBoard
console.log(chessBoard[0][1]);
