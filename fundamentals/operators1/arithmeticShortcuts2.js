/* Challenge

You are given a code with initialization of balance. (Don't delete this line!)

Your task is to add the following operations, in this order:

Add 100 to balance
Increase balance by 10%
Subtract 50 from balance
Use the arithmetic shortcuts to do so! */

// Type your code below
let balance = 0;
balance += 100;
balance *= 1.1;
balance -= 50;

// Don't change the line below
console.log(`balance = ${Math.floor(balance)}`);
