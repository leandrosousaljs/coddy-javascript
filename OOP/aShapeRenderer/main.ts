// TODO: Import the Shape class from './Shape.js';
import { Shape } from './Shape.js';
import { Circle } from './Circle.js';

// Tests
console.log(`Initial count: ${Shape.getTotalCreated()}`); // Should be 0

const shape1 = new Shape('red');
const shape2 = new Shape('green');
const circle1 = new Circle('blue', 5);
const circle2 = new Circle('yellow', 10);

console.log(`After creating 4 shapes: ${Shape.getTotalCreated()}`); // Should be 4
