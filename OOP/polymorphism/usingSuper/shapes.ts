/* Challenge

You're given a Shape class with a calculateArea() method and a Rectangle class that extends it. Your task is to override the calculateArea() method in Rectangle using super.

Your task is to complete the calculateArea() method in the Rectangle class to:

Call the parent's calculateArea() method using super and store the result
Calculate the rectangle's actual area: width × height
Return a combined string: parent's message + rectangle area. Example: Calculating area... Rectangle area: 50 */

export class Shape {
  calculateArea() {
    return 'Calculating area...';
  }
}

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // TODO: Override this method using super
  calculateArea() {
    // TODO: Call the parent's calculateArea() method using super and store the result
    const areaMessage = super.calculateArea();
    // TODO: Calculate the rectangle's actual area: width × height
    const rectangleArea = this.width * this.height;
    // TODO: Return a combined string: parent's message + rectangle area. Example: Calculating area... Rectangle area: 50
    return `${areaMessage} Rectangle area: ${rectangleArea}`;
  }
}
