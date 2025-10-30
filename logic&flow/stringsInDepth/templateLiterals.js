/* Challenge

Create a function named greetAll that takes an array of names and returns one string. Each name in the array should produce a line with the format Hello, <Name>! joined together into a single string, separated by newlines. Use template literals for the greeting lines. */

function greetAll(names) {
  let result = '';
  for (let i = 0; i < names.length; i++) {
    result += `Hello, ${names[i]}!\n`;
  }
  return result.trim();
}
