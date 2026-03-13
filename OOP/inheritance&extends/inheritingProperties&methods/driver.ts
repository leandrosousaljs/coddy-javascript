import { Dessert } from './desserts.ts';
import { Cake } from './desserts.ts';

// Test code - don't modify
const myCake = new Cake('Birthday Cake', 300, 'Chocolate');
console.log(myCake.describe()); // Should output "Birthday Cake has 300 calories"
console.log(myCake.flavor); // Should output "Chocolate"
console.log(myCake.addCandles()); // Should output "Added candles to Birthday Cake!"
