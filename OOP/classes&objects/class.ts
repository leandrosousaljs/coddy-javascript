/* Challenge

Create a class named Car with a constructor that takes two parameters: make and model. The constructor should set these values as properties of the object. */

// TODO: Create a class named Car
class Car {
  // TODO: Add a constructor that takes two parameters: make and model
  constructor(make, model) {
    // TODO: Set these values (make and model) as properties of the object
    this.make = make;
    this.model = model;
  }
}

// Don't modify the code below
const make = inp[0];
const model = inp[1];
const car = new Car(make, model);
console.log(car.make);
console.log(car.model);
