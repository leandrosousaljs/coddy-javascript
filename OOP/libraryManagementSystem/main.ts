import { Author } from './Author.js';
import { Book } from './Book.js';

// Tests
const rowling = new Author('J.K. Rowling');

// Valid case (should work silently)
const validBook = new Book('Harry Potter', rowling);
console.log('Author:', validBook.authorInfo); // Should output: "Author: J.K. Rowling"

// Invalid cases (should log message but still create book)
const invalid1 = new Book('Fake Book', 'String Author');
