/* Challenge

Create a type alias named Book for an object with the following properties:

title of type string
author of type string
pages of type number
isAvailable of type boolean
Create a type alias named Movie for an object with the following properties:

title of type string
director of type string
duration of type number
rating of type string
Using your type aliases, create the following variables:

Create a variable named novel of type Book with title "The Great Gatsby", author "F. Scott Fitzgerald", pages 180, and isAvailable true
Create a variable named textbook of type Book with title "TypeScript Handbook", author "Microsoft", pages 450, and isAvailable false
Create a variable named film of type Movie with title "Inception", director "Christopher Nolan", duration 148, and rating "PG-13"
Create a function named getBookInfo that accepts a parameter of type Book and returns a string in the format "[title] by [author] - [pages] pages".

Create a function named getMovieInfo that accepts a parameter of type Movie and returns a string in the format "[title] directed by [director] ([duration] min)".

Print the following outputs on separate lines:

Call getBookInfo with novel and print the result
Call getBookInfo with textbook and print the result
Call getMovieInfo with film and print the result
Print the availability status of novel (the isAvailable property) */

// TODO: Write your code here

// Create type aliases for Book and Movie
type Book = {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
};

type Movie = {
  title: string;
  director: string;
  duration: number;
  rating: string;
};
// Create variables using the type aliases
const novel: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180,
  isAvailable: true,
};

const textbook: Book = {
  title: 'TypeScript Handbook',
  author: 'Microsoft',
  pages: 450,
  isAvailable: false,
};

const film: Movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  duration: 148,
  rating: 'PG-13',
};
// Create functions to get information
const getBookInfo = ({ title, author, pages }: Book): string => `${title} by ${author} - ${pages} pages`;
const getMovieInfo = ({ title, director, duration }: Movie): string =>
  `${title} directed by ${director} (${duration} min)`;
// Print the required outputs
console.log(getBookInfo(novel));
console.log(getBookInfo(textbook));
console.log(getMovieInfo(film));
console.log(novel.isAvailable);
