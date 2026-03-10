export class ElectronicDevice {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  turnOn() {
    return `${this.brand} ${this.model} is now ON`;
  }
}
