/* Challenge

Recap Challenge: Build a Smart Thermostat

Practice everything you learned in this chapter by creating a smart thermostat object.

Your task:

Create a constructor function called Thermostat that takes a room parameter
Inside the constructor, set these properties using this:
room (from the parameter)
temperature (set to 22)
isOn (set to true)
Add these methods inside the constructor using this:
increaseTemp() - increases temperature by 1 degree
decreaseTemp() - decreases temperature by 1 degree
getStatus() - returns: "[room] thermostat: [temperature]°C" */

// TODO: Create a constructor function called Thermostat that takes a room parameter

function Thermostat(this: any, room: string) {
  // TODO: Inside the constructor, set these properties:
  // - room (from the parameter)
  // - temperature (set to 22)
  // - isOn (set to true)
  this.room = room;
  this.temperature = 22;
  this.isOn = true;

  // TODO: Add a method called increaseTemp() that increases temperature by 1 degree
  this.increaseTemp = function () {
    return this.temperature++;
  };

  // TODO: Add a method called decreaseTemp() that decreases temperature by 1 degree
  this.decreaseTemp = function () {
    return this.temperature--;
  };

  // TODO: Add a method called getStatus() that returns: "[room] thermostat: [temperature]°C"
  this.getStatus = function () {
    return `${this.room} thermostat: ${this.temperature}°C`;
  };
}

// Test your code - don't modify this part
const livingRoom = new Thermostat('Living Room');
livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.getStatus()); // Should print: "Living Room thermostat: 24°C"

const bedroom = new Thermostat('Bedroom');
bedroom.decreaseTemp();
bedroom.decreaseTemp();
console.log(bedroom.getStatus()); // Should print: "Bedroom thermostat: 20°C"
