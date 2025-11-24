/* Challenge

Create a function called formatNames that takes an array of names (strings) as an argument. The function should use the map() method to transform each name so that it's in title case (first letter of each word capitalized, rest lowercase). Return the new array of formatted names. */

function formatNames(names) {
  return names.map(name => {
    // Write your code here
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
}
