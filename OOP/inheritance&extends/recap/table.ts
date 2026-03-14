import { Furniture } from './furniture.js';

// TODO: Create a Table class that extends Furniture and export it
export class Table extends Furniture {
  shape: string;
  // TODO: Add the constructor function
  constructor(material: string, color: string, shape: string) {
    // TODO: Use super() in the constructor to inherit material and color and add a new property: shape
    super(material, color);
    this.shape = shape;
  }

  // TODO: Add method: placeItem() that returns "Item placed on table"
  placeItem(): string {
    return 'Item placed on table';
  }
}
