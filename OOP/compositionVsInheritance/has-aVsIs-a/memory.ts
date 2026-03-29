export class Memory {
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  load(): void {
    console.log(`Loading ${this.size} GB of data`);
  }
}
