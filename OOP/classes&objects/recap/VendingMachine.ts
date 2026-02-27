/* Challenge

Create a VendingMachine class that represents a drink vending machine with the following:

Properties:

location (string): where the machine is located
drinks (number): how many drinks are left
Methods:

getStatus(): returns a string like "Cafe machine: 15 drinks left" */

// TODO: Create the VendingMachine class and export it
export class VendingMachine {
  location: string;
  drinks: number;
  // TODO: Add a constructor that takes location (string) and drinks (number) parameters
  constructor(location: string, drinks: number) {
    this.location = location;
    this.drinks = drinks;
  }

  // TODO: Add getStatus() method that returns a string like "Cafe machine: 15 drinks left"
  getStatus() {
    return `${this.location} machine: ${this.drinks} drinks left`;
  }
}
