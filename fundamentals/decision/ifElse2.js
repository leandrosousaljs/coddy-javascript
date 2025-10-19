/* Challenge

You are given a code that gets as input a number indicating the rainfall in millimeters and stores it in a variable named rainfall.

Your task is to initialize a variable named rainCondition based on these conditions:

"Dry" if rainfall is smaller than 1.
"Light Rain" if rainfall is between 1 and 10 (including 1 and 10).
"Moderate Rain" if rainfall is between 11 and 50 (including 11 and 50).
"Heavy Rain" if rainfall is greater than 50. */
let rainfall = parseInt(inp); // Don't change this line
let rainCondition = 'unset';

// Type your code below

if (rainfall < 1) {
  rainCondition = 'Dry';
} else if (rainfall >= 1 && rainfall <= 10) {
  rainCondition = 'Light Rain';
} else if (rainfall >= 11 && rainfall <= 50) {
  rainCondition = 'Moderate Rain';
} else {
  rainCondition = 'Heavy Rain';
}

// Don't change the line below
console.log(rainCondition);
