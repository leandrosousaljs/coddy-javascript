/* Challenge

This is an online store product system. Products have prices, and physical products (like laptops) calculate shipping based on their weight. Digital products (like ebooks) would have free shipping.

Your task is to complete the missing methods in the product system:

1: Complete the Product class in product.js:

Add method getPrice() that returns this.#price
Add method getDescription() that returns ${this.name} - $${this.#price} */

export class Product {
  name: string;
  #price: number; // Private field for encapsulation

  constructor(name: string, price: number) {
    this.name = name;
    this.#price = price;
  }

  // Getter for price
  get price(): number {
    return this.#price;
  }

  // Setter with validation
  set price(newPrice: number) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log('Price must be positive');
    }
  }

  // TODO: Add method getPrice() that returns this.#price
  getPrice(): number {
    return this.#price;
  }
  // TODO: Add method getDescription() that returns ${this.name} - $${this.#price}
  getDescription(): string {
    return `${this.name} - $${this.#price}`;
  }
}
