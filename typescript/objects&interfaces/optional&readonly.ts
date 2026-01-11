/* Challenge

Create an interface named Book with the following properties:

title of type string (required)
isbn of type string (readonly)
subtitle of type string (optional)
pages of type number (required)
publishedYear of type number (readonly)
genre of type string (optional)
Create an interface named Magazine with the following properties:

name of type string (required)
issueNumber of type number (readonly)
topic of type string (optional)
monthlySubscription of type boolean (required)
Using your interfaces, create the following variables:

Create a variable named novel of type Book with title "1984", isbn "978-0-452-28423-4", pages 328, and publishedYear 1949
Create a variable named cookbook of type Book with title "The Joy of Cooking", isbn "978-0-7432-4626-2", subtitle "All About Baking", pages 1132, publishedYear 2006, and genre "Cooking"
Create a variable named techMag of type Magazine with name "Tech Today", issueNumber 45, and monthlySubscription true
Create a variable named scienceMag of type Magazine with name "Science Weekly", issueNumber 12, topic "Climate Change", and monthlySubscription false
Create a function named getBookDetails that accepts a parameter of type Book and returns a string. The function should return the book's title and pages in the format "[title] - [pages] pages".

Create a function named getMagazineInfo that accepts a parameter of type Magazine and returns a string. The function should return the magazine's name and issue number in the format "[name] Issue #[issueNumber]".

Print the following outputs on separate lines:

Call getBookDetails with novel and print the result
Call getBookDetails with cookbook and print the result
Call getMagazineInfo with techMag and print the result
Call getMagazineInfo with scienceMag and print the result
Print the ISBN of novel
Print the subscription status of techMag (the monthlySubscription property) */

// TODO: Write your code here

// Create the Book interface
interface Book {
  title: string;
  readonly isbn: string;
  subtitle?: string;
  pages: number;
  readonly publishedYear: number;
  genre?: string;
}
// Create the Magazine interface
interface Magazine {
  name: string;
  readonly issueNumber: number;
  topic?: string;
  monthlySubscription: boolean;
}
// Create the variables using your interfaces
const novel: Book = {
  title: '1984',
  isbn: '978-0-452-28423-4',
  pages: 328,
  publishedYear: 1949,
};

const cookbook: Book = {
  title: 'The Joy of Cooking',
  isbn: '978-0-7432-4626-2',
  subtitle: 'All About Baking',
  pages: 1132,
  publishedYear: 2006,
  genre: 'Cooking',
};

const techMag: Magazine = {
  name: 'Tech Today',
  issueNumber: 45,
  monthlySubscription: true,
};

const scienceMag: Magazine = {
  name: 'Science Weekly',
  issueNumber: 12,
  topic: 'Climate Change',
  monthlySubscription: false,
};
// Create the getBookDetails function
const getBookDetails = (book: Book): string => `${book.title} - ${book.pages} pages`;
// Create the getMagazineInfo function
const getMagazineInfo = (mag: Magazine): string => `${mag.name} Issue #${mag.issueNumber}`;
// Print the required outputs
console.log(getBookDetails(novel));
console.log(getBookDetails(cookbook));
console.log(getMagazineInfo(techMag));
console.log(getMagazineInfo(scienceMag));
console.log(novel.isbn);
console.log(techMag.monthlySubscription);
