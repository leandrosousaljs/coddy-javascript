/* Challenge

Create a readonly tuple named startPointthat represents a 2D point with two numbers (x and y coordinates). Initialize it with the values 0 and 0.

Create another readonly tuple named colorRGB that represents an RGB color value with three numbers (red, green, blue). Initialize it with the values 255, 128, and 64.

Create a third readonly tuple named userRecord that holds a number (user ID), a string (username), and a boolean (active status). Initialize it with the values 42, "admin", and true.

Print all three readonly tuples to the console on separate lines in the order they were created. */

const startPoint: readonly [number, number] = [0, 0];
const colorRGB: readonly [number, number, number] = [255, 128, 64];
const userRecord: readonly [number, string, boolean] = [42, 'admin', true];
// Print all three tuples
console.log(startPoint);
console.log(colorRGB);
console.log(userRecord);
