import { BankAccount } from './simpleBankAccount.ts';

// Test the implementation
const testAccount = new BankAccount('Alex Johnson', 500);

console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"
console.log('Balance:', testAccount.getBalance()); // still works: 500
console.log('Balance:', testAccount.balance); // undefined
