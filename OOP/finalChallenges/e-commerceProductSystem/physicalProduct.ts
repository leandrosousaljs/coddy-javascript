/* 2: Complete the PhysicalProduct class in physicalProduct.js:

Add method calculateShipping() that:
Calculates this.weight * 0.5 (50 cents per pound)
Returns the shipping cost */

import { Product } from './product.js';

export class PhysicalProduct extends Product {
  weight: number;

  constructor(name: string, price: number, weight: number) {
    super(name, price);
    this.weight = weight;
  }

  getDescription(): string {
    return `${this.name} - $${this.price} (${this.weight} lbs)`;
  }

  // TODO: Add method calculateShipping()
  calculateShipping(): number {
    // TODO: Return the calculated value this.weight * 0.5 (50 cents per pound)
    return this.weight * 0.5;
  }
}
