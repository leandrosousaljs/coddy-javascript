/* Challenge

You're given a Shape parent class and a Circle child class. The parent class has a calculateArea() method that returns 0.

Your task is to override the calculateArea() method in the Circle class to calculate the actual area of a circle.

The formula for circle area is: π × radius²
In JavaScript: Math.PI * this.radius * this.radius */

export class Shape {
  calculateArea() {
    return 0;
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  // TODO: Override the calculateArea() method to calculate and return  the actual area of a circle
  calculateArea() {
    // Use the formula: Math.PI * this.radius * this.radius
    return Math.PI * this.radius * this.radius;
  }
}
