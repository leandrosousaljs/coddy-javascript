/* Challenge

Create a function called filterBooks that takes two parameters:

An array of book objects, where each book has properties title (string), author (string), and rating (number from 1 to 5)
A minimum rating (number)
The function should use the filter() method to return a new array containing only the books with a rating greater than or equal to the minimum rating. */

function filterBooks(books, minRating) {
  // Write your code here
  const filtered = books.filter(book => book.rating >= minRating);

  return filtered;
}
