/* Challenge

You're given a User class with an age property. Your task is to add a getter and setter for age that:

Getter get age(): returns the stored age
Setter set age(newAge): validates that age is between 0 and 120
If valid (0-120): store it in this._age
If invalid: don't change it and log "Invalid age!" */

export class User {
  name: string;
  _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age; // Store age privately
  }

  // TODO: Add a getter method for age that returns the stored age
  get age(): number {
    return this._age;
  }
  // TODO: Add a setter method for age that validates that age is between 0 and 120
  set age(newAge: number) {
    // TODO: If the age is valid (0-120) store it in this._age
    if (newAge >= 0 && newAge <= 120) {
      this._age = newAge;
    } else {
      // TODO: If the age is invalid don't change it and log "Invalid age!"
      console.log('Invalid age!');
    }
  }
}
