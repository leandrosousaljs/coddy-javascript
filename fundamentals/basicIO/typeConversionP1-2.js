/* Challenge

You are given two strings, length and width, which represent the dimensions of a rectangle.

Convert both length and width to floats using the appropriate type conversion function.
Calculate the area of the rectangle and store it in a variable area.
Calculate the perimeter of the rectangle and store it in a variable perimeter.
Print both the area and the perimeter in the following format:
"The area is: [area] and the perimeter is: [perimeter]". */

let length = inp[0]; // Don't change this line
let width = inp[1]; // Don't change this line

// Write code below
let area = parseFloat(length) * parseFloat(width);
let perimeter = parseFloat(length) * 2 + parseFloat(width) * 2;
console.log(`The area is: ${area} and the perimeter is: ${perimeter}`);
