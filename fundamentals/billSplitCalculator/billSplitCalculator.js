/* Challenge

1.Did you know that splitting a bill with friends can be super easy with a little bit of JavaScript? In this project, you'll create a simple program that calculates how much each person needs to pay, including the tip.

You are given the inputs this program needs: billAmount, tipPercentage and numPeople

Every good program starts with a welcome message, output to the screen the following string:

'Bill Split Calculator'

2.Calculate the total, including the tip, output the result in the end.

3.Now we have a working program that calculates the total bill! The missing part is the splitting feature.

Add to the program a splitting feature:

1-It will take an additional number (int) from the user that indicates the number of people splitting the bill. (This will be the third input)
2-Calculate the amount per person by dividing the total amount by the number of people.
3-In the end, add another print of the amount per person. 

4.The last step of this project is to format the output!

For example, for the following input:

100
5
2
Output in the following format:

Bill Split Calculator
Total (including tip): $105
Each person pays: $52.5 */

let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

// Type your code below
console.log('Bill Split Calculator');
let total = billAmount + billAmount * (tipPercentage / 100);
console.log(`Total (including tip): $${total}`);
let splitTotal = total / numPeople;
console.log(`Each person pays: $${splitTotal}`);
