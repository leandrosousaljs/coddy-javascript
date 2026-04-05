import { SmartDevice } from './device.ts';

console.log(`Device count: ${SmartDevice.getDeviceCount()}`); // Should be 0

const basicDevice1 = new SmartDevice('Smart Plug');
const basicDevice2 = new SmartDevice(' Thermostat');
console.log(`Total devices now: ${SmartDevice.getDeviceCount()}`); // Should be 2
