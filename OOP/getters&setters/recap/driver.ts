import { UserProfile } from './user.js';

// Test code - don't modify
const user = new UserProfile('alice123', 'alice@email.com');

user.email = 'bob@email.com'; // Valid - should log success
user.email = 'invalid-email'; // Invalid - should log error
