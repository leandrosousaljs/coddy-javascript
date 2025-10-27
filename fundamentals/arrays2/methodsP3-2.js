/* Challenge

Create a function named formatSentence that:

Takes one argument: sentence (a string).
Splits the sentence into words using spaces (" ") as the delimiter.
Joins the words back together into a single string, separated by hyphens ("-").
Returns the formatted string. */

// Write code here
let formatSentence = str => {
  let arr = str.split(' ');
  console.log(arr.join('-'));
};
