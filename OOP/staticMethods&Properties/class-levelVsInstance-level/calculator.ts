/* Challenge

You're given a Calculator class with only a constructor. Your task is to add two methods:

1. Instance Method add(number)

Adds the given number to the calculator's current value
Updates this.value and returns the new value

*It is called on calculator instances: calc.add(3)

2. Static Method multiply(num1, num2)

Takes two numbers and returns their product
Does NOT use this (static methods don't have instance data)

*It is called on the Calculator class itself: Calculator.multiply(4, 6) */

export class Calculator {
  value: number;

  constructor(initialValue: number) {
    this.value = initialValue;
  }
  // TODO: Add an instance method add(number)
  add(number: number) {
    // TODO: Add the given number to the current value and update this.value
    // TODO: Return the new value
    return (this.value += number);
  }
  // TODO: Add a static method multiply(num1, num2)
  static multiply(num1: number, num2: number) {
    // TODO: This method should take two numbers and return their product
    // Do NOT use this (static methods don't have instance data)
    return num1 * num2;
  }
}
