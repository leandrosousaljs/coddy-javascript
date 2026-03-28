import { User } from './user.js';

// Test code - don't modify
const user = new User('Alice', 25);
console.log(user.age); // Should output 25

user.age = 30;
console.log(user.age); // Should output 30

user.age = 150; // Should show "Invalid age!"
console.log(user.age); // Should still output 30 (unchanged)
