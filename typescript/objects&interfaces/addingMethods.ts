/* Challenge

Create an interface named Calculator with the following properties and methods:

brand of type string
model of type string
isScientific of type boolean
add method that takes two number parameters and returns a number
getInfo method that takes no parameters and returns a string
Create an interface named BankAccount with the following properties and methods:

accountNumber of type string
balance of type number
isActive of type boolean
deposit method that takes a number parameter and returns void
getBalance method that takes no parameters and returns a number
Using your interfaces, create the following variables:

Create a variable named myCalculator of type Calculator with brand "Casio", model "FX-991EX", isScientific true, an add method that returns the sum of its two parameters, and a getInfo method that returns "[brand] [model]"
Create a variable named savingsAccount of type BankAccount with accountNumber "SAV-12345", balance 1500, isActive true, a deposit method that adds the parameter to the balance, and a getBalance method that returns the current balance
Print the following outputs on separate lines:

Call the getInfo method on myCalculator and print the result
Call the add method on myCalculator with arguments 15 and 27, and print the result
Call the getBalance method on savingsAccount and print the result
Call the deposit method on savingsAccount with argument 250
Call the getBalance method on savingsAccount again and print the result
Print the isScientific property of myCalculator */

// TODO: Write your code here
// Create the Calculator interface with the required properties and methods
interface Calculator {
  brand: string;
  model: string;
  isScientific: boolean;
  add(arg0: number, arg1: number): number;
  getInfo(): string;
}
// Create the BankAccount interface with the required properties and methods
interface BankAccount {
  accountNumber: string;
  balance: number;
  isActive: boolean;
  deposit(arg0: number): void;
  getBalance(): number;
}
// Create the myCalculator variable of type Calculator
const myCalculator: Calculator = {
  brand: 'Casio',
  model: 'FX-991EX',
  isScientific: true,
  add(a, b) {
    return a + b;
  },
  getInfo() {
    return `${this.brand} ${this.model}`;
  },
};
// Create the savingsAccount variable of type BankAccount
const savingsAccount: BankAccount = {
  accountNumber: 'SAV-12345',
  balance: 1500,
  isActive: true,
  deposit(val) {
    return (this.balance += val);
  },
  getBalance() {
    return this.balance;
  },
};
// Print all the required outputs
console.log(myCalculator.getInfo());
console.log(myCalculator.add(15, 27));
console.log(savingsAccount.getBalance());
savingsAccount.deposit(250);
console.log(savingsAccount.getBalance());
console.log(myCalculator.isScientific);
