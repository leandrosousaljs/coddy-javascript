/* Challenge

Create a function called toggleBookStatus that takes a book object as a parameter. The function should:

If the book has a property isRead that is true, change it to false
If the book hvas a property isRead that is false, change it to true
If the book doesn't have an isRead property, add it and set it to true
Return the modified book object */

function toggleBookStatus(book) {
  if (book.isRead === true) {
    book.isRead = false;
  } else if (book.isRead === false) {
    book.isRead = true;
  } else {
    book.isRead = true;
  }
  return book;
}
