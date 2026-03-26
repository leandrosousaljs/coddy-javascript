// TODO: Import the Shape class from './Shape.js';
import { Shape } from './Shape.js';
import { Circle } from './Circle.js';

// Tests
const basicShape = new Shape('red');
console.log(basicShape.describe()); // "A red shape"

const myCircle = new Circle('blue', 10);
console.log(myCircle.describe()); // Should output: "A blue shape (Circle with radius 10)"
console.log(myCircle.calculateArea()); // Should output: "314.1592653589793"