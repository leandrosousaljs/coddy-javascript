/* Challenge

Create a function named mergeCars that takes two car objects as parameters. The function should merge the second car's properties into the first car's properties and return a new car object without modifying any of the original objects. */

function mergeCars(car1, car2) {
  return { ...car1, ...car2 };
}
