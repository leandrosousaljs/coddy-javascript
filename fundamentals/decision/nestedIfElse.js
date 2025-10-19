/* Challenge

Create a program that checks if someone can ride a rollercoaster. The requirements are:

Must be at least 12 years old
Must be taller than 150cm
If they meet both requirements but are under 15, they need adult supervision
Print exactly these messages for each case:

If too young: Sorry, you're too young
If not tall enough: Sorry, you're not tall enough
If under 15 and no adult: Sorry, you need an adult with you
If under 15 with adult: You can ride with adult supervision!
If 15 or older and tall enough: You can ride by yourself! */

let age = parseInt(inp[0]); // Don't change this line
let height = parseInt(inp[1]); // Don't change this line
let has_adult = inp[2] === 'true'; // Don't change this line

if (age >= 12) {
  if (height > 150) {
    if (age < 15) {
      if (!has_adult) {
        console.log('Sorry, you need an adult with you');
      } else {
        console.log('You can ride with adult supervision!');
      }
    } else {
      console.log('You can ride by yourself!');
    }
  } else {
    console.log("Sorry, you're not tall enough");
  }
} else {
  console.log("Sorry, you're too young");
}

// Write your code below
