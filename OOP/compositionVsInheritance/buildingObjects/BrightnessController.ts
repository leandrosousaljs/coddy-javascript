export class BrightnessController {
  level: number;

  constructor() {
    this.level = 50; // Default 50% brightness
  }

  setBrightness(level: number): void {
    this.level = Math.max(0, Math.min(100, level)); // Keep between 0-100
  }
}
