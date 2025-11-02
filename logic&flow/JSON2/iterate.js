/* Challenge

Create a function named analyzeCarData that takes a JSON object as input. The object contains data about a car dealership's inventory where:

keys are the car models
values are the prices
The function should return an object containing:

mostExpensive: the name of the most expensive car
cheapest: the name of the cheapest car
averagePrice: the average price of all cars */

function analyzeCarData(carData) {
  // Create variables to track values
  let highestPrice = 0;
  let lowestPrice = Infinity;
  let mostExpensiveCar = '';
  let cheapestCar = '';
  let totalPrice = 0;
  let carCount = 0;

  // Loop through the object
  for (let car in carData) {
    let price = carData[car];

    // Find most expensive car
    if (price > highestPrice) {
      highestPrice = price;
      mostExpensiveCar = car;
    }

    // Find cheapest car
    if (price < lowestPrice) {
      lowestPrice = price;
      cheapestCar = car;
    }

    // Add to total for average calculation
    totalPrice += price;
    carCount++;
  }

  // Calculate average
  let averagePrice = totalPrice / carCount;

  // Return result object
  return {
    mostExpensive: mostExpensiveCar,
    cheapest: cheapestCar,
    averagePrice: averagePrice,
  };
}
