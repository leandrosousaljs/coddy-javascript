/* Challenge

Create a function that processes different types of media items using the in operator to distinguish between them.

Create two type aliases:

Movie with properties title (string) and director (string)
Song with properties title (string) and artist (string)
Create a function named getMediaInfo that:

Takes a parameter media of type Movie | Song
Uses the in operator to check if the director property exists
Returns "Movie: [title] directed by [director]" if it's a movie
Returns "Song: [title] by [artist]" if it's a song
Has an explicit return type of string
Create a second function named processValue that:

Takes a parameter value of type string | Date
Uses the instanceof operator to check if value is a Date
Returns the year as a number if it's a Date (using getFullYear())
Returns the string length as a number if it's a string
Has an explicit return type of number
Create test data:

movie1: { title: "Inception", director: "Christopher Nolan" }
song1: { title: "Bohemian Rhapsody", artist: "Queen" }
movie2: { title: "The Matrix", director: "The Wachowskis" }
song2: { title: "Imagine", artist: "John Lennon" }
testDate: new Date("2023-12-25")
testString: "TypeScript"
Print the following outputs:

Call getMediaInfo with movie1
Call getMediaInfo with song1
Call getMediaInfo with movie2
Call getMediaInfo with song2
Call processValue with testDate
Call processValue with testString */

// TODO: Write your code here

// Create type aliases for Movie and Song
type Movie = {
  title: string;
  director: string;
};

type Song = {
  title: string;
  artist: string;
};
// Create the getMediaInfo function
const getMediaInfo = (media: Movie | Song): string => {
  if ('director' in media) {
    return `Movie: ${media.title} directed by ${media.director}`;
  }

  return `Song: ${media.title} by ${media.artist}`;
};

// Create the processValue function
const processValue = (value: string | Date): number => {
  if (value instanceof Date) {
    return value.getFullYear();
  }

  return value.length;
};

// Create test data
const movie1 = { title: 'Inception', director: 'Christopher Nolan' };
const song1 = { title: 'Bohemian Rhapsody', artist: 'Queen' };
const movie2 = { title: 'The Matrix', director: 'The Wachowskis' };
const song2 = { title: 'Imagine', artist: 'John Lennon' };
const testDate = new Date('2023-12-25');
const testString = 'TypeScript';

// Print the outputs
console.log(getMediaInfo(movie1));
console.log(getMediaInfo(song1));
console.log(getMediaInfo(movie2));
console.log(getMediaInfo(song2));
console.log(processValue(testDate));
console.log(processValue(testString));
