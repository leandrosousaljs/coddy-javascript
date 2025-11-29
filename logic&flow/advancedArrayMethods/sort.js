/* Challenge

Create a function named sortByLength that takes an array of strings and returns a new array with the same strings sorted by their length in ascending order. If two strings have the same length, they should be sorted alphabetically. */

function sortByLength(arr) {
  return arr.sort((a, b) => {
    // Write code here
    if (a.length - b.length !== 0) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
}
