/* Challenge

1.In this project we will create a BankAccount class from scratch to manage a customer's bank account.

Your first task is to create a class named BankAccount with:

Constructor that takes two parameters:
accountHolder (string): The name of the account owner
initialBalance (number, optional): Starting balance (defaults to 0)
Method getBalance() which:
Returns the current account balance
No parameters needed
Method getAccountInfo() that:
Returns a formatted string: "${accountHolder}: $${balance}"
Example: If accountHolder is "John" and balance is 500, returns "John: $500" 

2.Next, we add transaction functionality to your BankAccount class by implementing deposit() and withdraw() methods.

Your task: edit only bankAccount.js — add the two methods below to the BankAccount class. The file driver.js is read-only and runs automatically to test your implementation.

1. deposit(amount) method:

Checks if the amount is positive (greater than 0)
If valid:
Adds the amount to the balance
Logs exactly: Deposited $${amount}
If invalid: Logs exactly: Invalid deposit amount
2. withdraw(amount) method:

Checks if the amount is positive AND less than or equal to current balance
If valid:
Subtracts the amount from the balance
Logs exactly: Withdrew $${amount}
If invalid: Logs exactly: Invalid withdrawal amount or insufficient funds */

// TODO: Create a class named BankAccount
export class BankAccount {
  accountHolder: string;
  balance: number;
  // TODO: Add a constructor that takes two parameters: accountHolder and initialBalance (defaults to 0)
  constructor(accountHolder: string, initialBalance: number = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }
  // TODO: Add a method getBalance() that returns the current account balance
  getBalance() {
    return this.balance;
  }

  getAccountInfo() {
    return `${this.accountHolder}: $${this.balance}`;
  }

  // TODO: Add the deposit(amount) method
  deposit(amount: number) {
    // TODO: The method should check if the amount is positive (greater than 0)
    if (amount > 0) {
      // TODO: If valid: Adds the amount to the balance and logs: Deposited $${amount},
      this.balance += amount;
      console.log(`Deposited $${amount}`);
    } else {
      // otherwise logs: Invalid deposit amount

      console.log('Invalid deposit amount');
    }
  }

  // TODO: Add the withdraw(amount) method
  withdraw(amount: number) {
    // TODO: The method should check if the amount is positive AND less than or equal to current balance
    if (amount > 0 && amount <= this.balance) {
      // TODO: If valid: Subtracts the amount from the balance and logs: Withdrew $${amount},
      this.balance -= amount;
      console.log(`Withdrew $${amount}`);
    } else {
      // otherwise logs: Invalid withdrawal amount or insufficient funds

      console.log('Invalid withdrawal amount or insufficient funds');
    }
  }
}

// TODO: Add a method getAccountInfo() that returns a formatted string: "${accountHolder}: $${balance}"

// Test
const testAccount = new BankAccount('Alex Johnson', 500);

console.log('Initial state:');
console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"
console.log('Balance:', testAccount.getBalance()); // 500
