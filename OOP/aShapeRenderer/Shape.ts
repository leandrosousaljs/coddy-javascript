/* Challenge

1.In this project, we'll build a simple shape rendering system that demonstrates key Object-Oriented Programming concepts. We'll create different shapes that can describe themselves, practice inheritance, and organize our code using modules.

Your task:

In `Shape.js`, create a `Shape` class with:
A constructor that takes one parameter: color
A method called describe() that returns: "A ${color} shape"
Export the class using export
In main.js, import the class using: import { Shape } from './Shape.js'; 
*/

// TODO: Create a Shape class
// TODO: Export the class using export
export class Shape {
  color: string;
  // TODO: Add a constructor that takes one parameter: color
  constructor(color: string) {
    this.color = color;
  }
  // TODO: Add a method called describe() that returns: "A ${color} shape"
  describe() {
    return `A ${this.color} shape`;
  }
}
