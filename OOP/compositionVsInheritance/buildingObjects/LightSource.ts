export class LightSource {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  turnOn() {
    console.log(`${this.color} light is ON`);
  }

  turnOff() {
    console.log('Light is OFF');
  }
}
