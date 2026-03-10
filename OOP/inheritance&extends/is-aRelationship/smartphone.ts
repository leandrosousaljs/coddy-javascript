import { ElectronicDevice } from './electronicDevice.ts';

export class Smartphone extends ElectronicDevice {
  // Smartphone inherits from ElectronicDevice
  constructor(brand: string, model: string) {
    super(brand, model);
  }
}
