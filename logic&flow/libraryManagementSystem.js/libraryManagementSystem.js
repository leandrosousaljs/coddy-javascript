/* Challenge

1-You will be creating a library management system. Start by initializing the system with the provided data and creating the main function structure.

Create a variable called libraryData with this exact initial data:

{
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Fiction",
            isRead: false,
            rating: 0,
            borrowed: false,
            borrowedBy: "",
            borrowDate: ""
        }
    ],
    readers: [
        {
            name: "John Smith",
            favoriteGenre: "Fiction",
        }
    ]
}
Now follow these steps:

Create a function called manageLibrary that takes two parameters:

actions (array of strings)
data (array of objects)
The function should process each action in the actions array in sequence, using the corresponding data object from the data array at the same index. For example, the action at actions[i] uses the data at data[i].

Create a loop that goes through each action in the actions array, then inside the loop:

Create an empty result array that will hold all of the results
Create a switch statement that will handle different cases
Add a case printBooks inside the switch statement that will add the current books inside the libraryData to the results array
Add a case printReaders inside the switch statement that will add the current readers inside the libraryData to the results array
Add a default case that adds an “Invalid action!” to the results array

2-Add the case "addBook". This case should:

Create a new book object using the currentData parameter which holds the following properties:
title (string)
author (string)
year (string)
genre (string)
Generate an id (use libraryData.books.length + 1)
Set default values for: isRead, rating, borrowed, borrowedBy, borrowDate (like in the initial data)
Add the new book to libraryData.books array
Add the string Book added successfully! to the results array 

3-Create a new case searchByTitle in your switch statement. This action should search for books by their title.

For the searchByTitle case:

The currentData parameter is a string to search for
Create an empty array searchResults to store the search results
Loop through all books in the library
For each book, check if its title includes the search string
The search should be case-insensitive (convert both strings to lowercase before comparing)
If a match is found, add the book to the searchResults array
Add the searchResults array to the main results array

4-Add a new case filterByGenre to your switch statement. This action should filter books by their genre.

For the filterByGenre case:

The currentData parameter is a string representing the genre to filter by
Create an empty array filteredResults to store the filtered results
Loop through all books in the library
For each book, check if its genre exactly matches the requested genre
If there's a match, add the book to the filteredResults array
Add the filteredResults to the main results array

5-Add a new case markAsRead to your switch statement. This action should mark books as read and add ratings.

For the markAsRead case:

The currentData parameter is an object containing:
bookId (number)
rating (number from 1 to 5)
Find the book with the matching id in the library
Validate that the rating is a number between 1 and 5
If the book is found and rating is valid:
Set isRead to true
Set the rating to the provided value
Add appropriate messages to the results array:
Book marked as read! for successful update
Invalid rating! Please rate between 1 and 5 for invalid rating
Book not found! if the book id doesn't exist

*/

// Initial library data
let libraryData = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Fiction',
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: '',
      borrowDate: '',
    },
  ],
  readers: [
    {
      name: 'John Smith',
      favoriteGenre: 'Fiction',
    },
  ],
};

function manageLibrary(actions, data) {
  let results = [];
  let searchResults = [];
  let filteredResults = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case 'printBooks':
        // Write your code here
        results.push(libraryData.books);
        break;
      case 'printReaders':
        // Write your code here
        results.push(libraryData.readers);
        break;
      case 'addBook':
        const newBook = {
          id: libraryData.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: '',
          borrowDate: '',
        };

        libraryData.books.push(newBook);

        results.push('Book added successfully!');
        break;
      case 'searchByTitle':
        for (const book of libraryData.books) {
          if (book.title.toLowerCase().includes(currentData.toLowerCase())) {
            searchResults.push(book);
          }
        }
        results.push(searchResults);
        break;
      case 'filterByGenre':
        for (const book of libraryData.books) {
          if (book.genre === currentData) {
            filteredResults.push(book);
          }
        }
        results.push(filteredResults);
        break;
      case 'markAsRead':
        let found = false;

        if (currentData.rating < 1 || currentData.rating > 5) {
          results.push('Invalid rating! Please rate between 1 and 5');
          break;
        }

        for (const book of libraryData.books) {
          if (book.id === currentData.bookId) {
            book.isRead = true;
            book.rating = currentData.rating;
            found = true;
            results.push('Book marked as read!');
            break;
          }
        }

        if (!found) results.push('Book not found!');
        break;
      default:
        results.push('Invalid action!');
        break;
    }
  }
  return results;
}
