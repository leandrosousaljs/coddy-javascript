/* Challenge

Complete the SmartBulb methods in the SmartBulb.js file.

Implement the activate() method to turn on the light.
Implement the adjustBrightness() method to set the brightness and log exactly: Brightness set to ${this.brightness.level}% */

// Import the components
import { LightSource } from './LightSource.ts';
import { BrightnessController } from './BrightnessController.ts';

export class SmartBulb {
  light: LightSource;
  brightness: BrightnessController;
  constructor(color: string) {
    // Create instances of the two components
    this.light = new LightSource(color);
    this.brightness = new BrightnessController();
  }

  activate() {
    // TODO: Call turnOn() method on the light instance
    this.light.turnOn();
  }

  adjustBrightness(level: number) {
    // TODO: Set the brightness to the given level
    this.brightness.setBrightness(level);
    // TODO: Log the new brightness level exactly: Brightness set to ${this.brightness.level}%
    console.log(`Brightness set to ${this.brightness.level}%`);
  }
}
