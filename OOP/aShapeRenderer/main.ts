// TODO: Import the Shape class from './Shape.js';
import { Shape } from './Shape.js';
import { Circle } from './Circle.js';

// Test the Shape class
const myShape = new Shape('blue');
console.log(myShape.describe()); // Outputs: "A blue shape"

const myCircle = new Circle('blue', 10);
console.log(myCircle.describe()); // Should output: "A blue shape"
