/* Challenge

Create a Car Object and Print Its Description

You're given a constructor function that creates car objects. Your task is to:

Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
Call the getDescription method on your car object
Print the result to the console */

function Car(this: any, name: string, year: number) {
  this.name = name;
  this.year = year;

  this.getDescription = function () {
    return 'This is a ' + this.name + ' from ' + this.year;
  };
}

// TODO: Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
const honda = new Car('Honda', 2018);
// TODO: Call the getDescription method on your car object and print the result to the console
console.log(honda.getDescription());
