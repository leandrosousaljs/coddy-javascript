/* 2.Your task is to create a Circle class that inherits from the Shape class.

In the file called Circle.js import the Shape class at the top: import { Shape } from './Shape.js';
Create a Circle class that extends Shape and export it
The constructor should take two parameters: color and radius
Call super(color) to initialize the parent class
Store the radius as a property: this.radius = radius
Import the `Circle` class in the main file 

3.Improve the Circle class by overriding the describe() method and adding a new calculateArea() method.

Your task:

Override the describe() method to return ${super.describe()} (Circle with radius ${this.radius}).

Example: "A blue shape (Circle with radius 10)"

Add a calculateArea() method that:
Calculates the area using the formula: Math.PI * this.radius * this.radius
Returns the calculated area (no console.log needed)

*This is a Circle-specific method (not in the parent Shape class) */

import { Shape } from './Shape.js';

export class Circle extends Shape {
  radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  // TODO: Add a method called describe to override the describe() method
  // It should return ${super.describe()} (Circle with radius ${this.radius}).
  // Example: "A blue shape (Circle with radius 10)"
  describe() {
    return `${super.describe()} (Circle with radius ${this.radius})`;
  }
  // TODO: Add a method called calculateArea() that calculates the area using the formula: Math.PI * this.radius * this.radius
  calculateArea() {
    // TODO: Return the calculated area value (no console.log needed)
    return Math.PI * this.radius * this.radius;
  }
}
