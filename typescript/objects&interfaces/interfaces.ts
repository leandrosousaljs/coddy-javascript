/* Challenge

Create an interface named Pet with the following properties:

name of type string
species of type string
age of type number
isVaccinated of type boolean
Create an interface named Vehicle with the following properties:

make of type string
model of type string
year of type number
Using your interfaces, create the following variables:

Create a variable named myDog of type Pet with name "Buddy", species "Golden Retriever", age 3, and isVaccinated true
Create a variable named myCat of type Pet with name "Whiskers", species "Persian", age 2, and isVaccinated false
Create a variable named myCar of type Vehicle with make "Toyota", model "Camry", and year 2022
Create a function named describePet that accepts a parameter of type Pet and returns a string in the format "[name] is a [age]-year-old [species]".

Create a function named getVehicleInfo that accepts a parameter of type Vehicle and returns a string in the format "[year] [make] [model]".

Print the following outputs on separate lines:

Call describePet with myDog and print the result
Call describePet with myCat and print the result
Call getVehicleInfo with myCar and print the result
Print the vaccination status of myDog (the isVaccinated property) */

// TODO: Write your code here

// Create the Pet interface
interface Pet {
  name: string;
  species: string;
  age: number;
  isVaccinated: boolean;
}
// Create the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
}
// Create the variables using your interfaces
const myDog: Pet = {
  name: 'Buddy',
  species: 'Golden Retriever',
  age: 3,
  isVaccinated: true,
};

const myCat: Pet = {
  name: 'Whiskers',
  species: 'Persian',
  age: 2,
  isVaccinated: false,
};

const myCar: Vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
};
// Create the describePet function
const describePet = (pet: Pet): string => `${pet.name} is a ${pet.age}-year-old ${pet.species}`;
// Create the getVehicleInfo function
const getVehicleInfo = (vehicle: Vehicle): string => `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
// Print the required outputs
console.log(describePet(myDog));
console.log(describePet(myCat));
console.log(getVehicleInfo(myCar));
console.log(myDog.isVaccinated);
