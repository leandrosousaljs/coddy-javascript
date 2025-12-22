/* Challenge

Create two typed arrays: firstScores containing the numbers 85, 92, and 78, and secondScores containing the numbers 88, 95, and 82.

Use the spread operator to combine both arrays into a new array called allScores.

Create another typed array called bonusPoints containing the numbers 5 and 10.

Use the spread operator to create a final array called finalScores that combines allScores with bonusPoints, but also includes the individual number 100 at the beginning and the number 90 at the end.

Print the finalScores array to the console. */

// TODO: Write your code here
const firstScores: number[] = [85, 92, 78];
const secondScores: number[] = [88, 95, 82];
const allScores: number[] = [...firstScores, ...secondScores];
const bonusPoints: number[] = [5, 10];
const finalScores: number[] = [100, ...allScores, ...bonusPoints, 90];

console.log(finalScores);
