/* Challenge

You are given a code that gets as input a number that indicates the wind speed and stores it in a variable named wind.

Note: the input is processed behind the scenes. In JavaScript, it's problematic to get input from the user, so we won't touch it in this section.

Your task is to initialize variable condition based on the conditions:

"Calm" if wind is smaller than 8,
"Breeze" if wind is between 8 and 31 (including 8 and 31).
"Gale" if wind is between 32 and 63 (including 32 and 63)
"Storm" otherwise */

let wind = parseInt(inp); // Don't change this line
let condition = 'unset';
// Type your code below

if (wind < 8) {
  condition = 'Calm';
} else if (wind >= 8 && wind <= 31) {
  condition = 'Breeze';
} else if (wind >= 32 && wind <= 63) {
  condition = 'Gale';
} else {
  condition = 'Storm';
}
// Don't change the line below
console.log(`condition = ${condition}`);
