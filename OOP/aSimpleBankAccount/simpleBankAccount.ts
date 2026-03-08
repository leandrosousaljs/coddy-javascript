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
If invalid: Logs exactly: Invalid withdrawal amount or insufficient funds

3.Let's make the BankAccount class more secure by converting the balance to a private field."

Your task:

Add #balance at the top of the class
Change this.balance to this.#balance in the constructor
Change this.balance to this.#balance in all methods
*/

export class BankAccount {
  // TODO: Add a private field called #balance
  accountHolder: string;
  #balance: number;

  // TODO: Change this.balance to this.#balance
  constructor(accountHolder: string, initialBalance: number = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  // TODO: Change this.balance to this.#balance in the getBalance() method
  getBalance() {
    return this.#balance;
  }

  // TODO: Change this.balance to this.#balance in the getAccountInfo() method
  getAccountInfo() {
    return `${this.accountHolder}: $${this.#balance}`;
  }

  // TODO: Change this.balance to this.#balance in the deposit(amount) method
  deposit(amount: number) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}`);
    } else {
      console.log(`Invalid deposit amount`);
    }
  }

  // TODO: Change this.balance to this.#balance in the withdraw(amount) method
  withdraw(amount: number) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}`);
    } else {
      console.log(`Invalid withdrawal amount or insufficient funds`);
    }
  }
}
