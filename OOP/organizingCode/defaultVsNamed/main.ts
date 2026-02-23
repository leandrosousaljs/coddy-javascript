/* Challenge

You have two files. Your task is to set up the exports in calculator.js and imports in main.js.

In calculator.js: Export calculate as default and square as named
In main.js: Import both functions correctly
Tests will check:

Default export used for calculate
Named export used for square
Both imports work correctly */

// TODO: Import both functions here from calculator.js
import calculate, { square } from './calculator.ts';

// Test
console.log(calculate(10, 5, '+')); // Should output 15
console.log(square(4)); // Should output 16
