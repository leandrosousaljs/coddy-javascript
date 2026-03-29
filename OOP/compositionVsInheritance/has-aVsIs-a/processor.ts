export class Processor {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  compute(): void {
    console.log(`Processing at ${this.speed} GHz`);
  }
}
