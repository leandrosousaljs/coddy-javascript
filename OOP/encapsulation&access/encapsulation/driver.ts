import { createUser } from './createUser.ts';

// Test code - don't modify
const user = createUser('john_doe', 25);
console.log(user.getUsername()); // Should output "john_doe"
console.log(user.getAge()); // Should output 25
