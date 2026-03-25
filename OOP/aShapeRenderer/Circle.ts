/* Challenge

Your task is to create a Circle class that inherits from the Shape class.

In the file called Circle.js import the Shape class at the top: import { Shape } from './Shape.js';
Create a Circle class that extends Shape and export it
The constructor should take two parameters: color and radius
Call super(color) to initialize the parent class
Store the radius as a property: this.radius = radius
Import the `Circle` class in the main file */

// TODO: Import the Shape class
import { Shape } from './Shape.js';
// TODO: Create a Circle class that extends Shape and export it
export class Circle extends Shape {
  radius: number;
// TODO: Add a constructor function that takes two parameters: color and radius
    constructor(color: string, radius: number) {
// TODO: Call super(color) to initialize the parent class
        super(color);
// TODO: Store the radius as a property: this.radius = radius
        this.radius = radius;
    }
}

