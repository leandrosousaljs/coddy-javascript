// Base class
export class Furniture {
  material: string;
  color: string;
  constructor(material: string, color: string) {
    this.material = material;
    this.color = color;
  }

  describe(): string {
    return `${this.color} ${this.material} furniture`;
  }
}
