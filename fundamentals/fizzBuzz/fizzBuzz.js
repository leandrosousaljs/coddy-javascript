/* Challenge

1.FizzBuzz is a simple and classic programming game often used to teach basic logic and control flow. The game involves iterating through numbers from 1 up to a specified limit. For each number:

If the number is divisible by 3, the program outputs "Fizz."
If the number is divisible by 7, it outputs "Buzz."
If the number is divisible by both 3 and 7, it outputs "FizzBuzz."
Otherwise, it simply outputs the number.
Let's start with a simple welcome message.

You are given the input this program needs: num

For starters, just output the welcome message:

'Welcome to FizzBuzz!' 

2.Add a function named fizzbuzz that gets one number (int) as an argument, and:

If the number is divisible by 3, return "Fizz".
If the number is divisible by 7, return "Buzz".
If the number is divisible by both 3 and 7, return "FizzBuzz".
If none of the above conditions are met, return the number itself in a string format.
Finally print the output of fizzbuzz(num) where num is the given input.

3.Loop over the numbers from 1 to num (the given input), and each time use the function you created to calculate the FizzBuzz result and output it.

For example, for input of 7 output:

Welcome to FizzBuzz!
1
2
Fizz
4
5
Fizz
Buzz

4.Add a small twist to the game:

Numbers that contain the digit "3" but aren't divisible by 3 or 7 will output Almost Fizz */

let num = parseInt(inp); // Don't change this line

// Type your code below

console.log('Welcome to FizzBuzz!');

let fizzbuzz = n => {
  let res = '';
  if (n % 3 === 0 && n % 7 === 0) {
    res = 'FizzBuzz';
  } else if (n % 7 === 0) {
    res = 'Buzz';
  } else if (n % 3 === 0) {
    res = 'Fizz';
  } else if (String(n).includes('3') && !n % 3 === 0 && !n % 7 === 0) {
    res = 'Almost Fizz';
  } else {
    res = String(n);
  }
  return res;
};

for (let i = 1; i <= num; i++) {
  console.log(fizzbuzz(i));
}
