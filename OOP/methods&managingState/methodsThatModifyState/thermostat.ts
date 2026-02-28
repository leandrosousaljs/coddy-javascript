/* Challenge

You're given a Thermostat class. Your task is to add methods that modify its temperature state:

increaseTemp() - increases temperature by 1 degree
decreaseTemp() - decreases temperature by 1 degree */

export class Thermostat {
  room: string;
  currentTemp: number;

  constructor(room: string, currentTemp: number) {
    this.room = room;
    this.currentTemp = currentTemp;
  }

  // TODO: Add the increaseTemp() method that increases temperature by 1 degree
  increaseTemp() {
    this.currentTemp++;
  }
  // TODO: Add the decreaseTemp() method that decreases temperature by 1 degree
  decreaseTemp() {
    this.currentTemp--;
  }
}
