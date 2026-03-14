import { Furniture } from './furniture.js';

// TODO: Create a Chair class that extends Furniture and export it
export class Chair extends Furniture {
  numberOfLegs: number;
  // TODO: Add the constructor function
  constructor(material: string, color: string, numberOfLegs: number) {
    // TODO: Use super() in the constructor to inherit material and color and add a new property: numberOfLegs
    super(material, color);
    this.numberOfLegs = numberOfLegs;
  }

  // TODO: Add method: sit() that returns "Sitting on the chair"
  sit(): string {
    return 'Sitting on the chair';
  }
}
