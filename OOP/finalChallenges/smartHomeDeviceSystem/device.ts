/* Challenge

In this challenge you have to add static tracking to the SmartDevice system so we can monitor how many devices are in our smart home.

1. Add static property to SmartDevice class:

Add: static totalDevices = 0; at the top of the class
2. Increment the counter in constructor:

In the SmartDevice constructor, add: SmartDevice.totalDevices++;
3. Add static method to get count:

Add: static getDeviceCount() { return SmartDevice.totalDevices; } */

export class SmartDevice {
  name: string;
  isOn: boolean;
  // TODO: Add static property totalDevices = 0
  static totalDevices: number = 0;
  constructor(name: string) {
    this.name = name;
    this.isOn = false;
    // TODO: Increment the counter, add: SmartDevice.totalDevices++;
    SmartDevice.totalDevices++;
  }

  turnOn(): void {
    this.isOn = true;
  }

  turnOff(): void {
    this.isOn = false;
  }

  getStatus(): string {
    return `${this.name} is ${this.isOn ? 'ON' : 'OFF'}`;
  }

  // TODO:  Add static method called getDeviceCount() that returns the total devices count
  static getDeviceCount(): number {
    return SmartDevice.totalDevices;
  }
}
