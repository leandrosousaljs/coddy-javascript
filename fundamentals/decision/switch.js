/* Challenge

Beginner
Create a program that converts a number grade to a letter grade using a switch statement. The program should do the following:

You are given a user input, a number grade (0-100) stored in a variable.
Use a switch statement to determine the corresponding letter grade based on these ranges:
90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
0-59: "F"
Print the letter grade.
Handle invalid input (numbers outside the 0-100 range) by printing "Invalid grade". */

// Get the number grade from the user
let numGrade = inp;

// Convert input to a number
numGrade = parseInt(numGrade);

// Determine the letter grade using a switch statement
let letterGrade;

switch (true) {
  // Write your code here
  case numGrade >= 90:
    letterGrade = 'A';
    break;
  case numGrade >= 80:
    letterGrade = 'B';
    break;
  case numGrade >= 70:
    letterGrade = 'C';
    break;
  case numGrade >= 60:
    letterGrade = 'D';
    break;
  default:
    letterGrade = 'F';
}

// Print the letter grade
console.log(`Letter grade: ${letterGrade}`);
