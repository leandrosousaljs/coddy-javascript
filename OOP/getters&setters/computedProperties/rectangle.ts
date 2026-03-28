/* Challenge

You're given a Rectangle class with width and height properties. Your task is to add computed properties for area and perimeter.

Computed property area - returns width × height
Computed property perimeter - returns 2 × (width + height) */

export class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // TODO: Add a getter method here that returns the computed area (width × height)
  get area() {
    return this.width * this.height;
  }
  // TODO: Add a getter method here that returns the computed perimeter property (2 × (width + height))
  get perimeter() {
    return this.width * 2 + this.height * 2;
  }
}
