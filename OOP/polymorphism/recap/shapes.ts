/* Challenge

You're given a Shape class and two child classes. Complete them using polymorphism concepts.

In Circle class: Override describe() to return: "This is a circle with radius [radius]"
In Square class: Override describe() to return: "This is a square with side [side]" */

export class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    return `This is a ${this.name}`;
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super('circle');
    this.radius = radius;
  }

  // TODO: Override the describe() method to return: "This is a circle with radius [radius]"
  describe() {
    const shapeMessage = super.describe();
    return `${shapeMessage} with radius ${this.radius}`;
  }
}

export class Square extends Shape {
  side: number;
  constructor(side: number) {
    super('square');
    this.side = side;
  }

  // TODO: Override the describe() method to return: "This is a square with side [side]"
  describe() {
    const shapeMessage = super.describe();
    return `${shapeMessage} with side ${this.side}`;
  }
}
