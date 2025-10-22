/* Challenge

Write a program that gets one input, a float number.

Use a while loop to multiply the input by 2 as long as the number is less than or equal to 100.

Print the first number that is greater than 100. */

let number = parseFloat(inp); // Don't change this line

while (number <= 100) {
  number *= 2;
}

console.log(number);
