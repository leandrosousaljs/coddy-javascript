/* Challenge

You will be creating a Movie Festival Management System. Start by initializing the system with the provided data and creating the main function structure.

Create a variable called festivalData with this exact initial data:

{
	movies: [{
		id: 1,
		title: "Inception",
		director: "Christopher Nolan",
		year: 2010,
		mainGenre: "Sci-Fi",
		secondGenre: undefined,
		avgRating: 0,
		available: true
	}],
	venues: [{
		id: 1,
		name: "Main Theater",
		capacity: 200,
	}],
	screenings: [{
		id: 1,
		movieId: 1,
		venueId: 1,
		date: '2023-10-29',
		time: '13:35:00',
		availableSeats: 200
	}],
	tickets: new Set()
}
Create a function called manageFestival that takes two parameters:

actions (array of strings)
data (array of objects)
The function should:

Process each action in the actions array in sequence
Create an empty results array
Create a switch statement with the following initial cases:
listMovies: adds festivalData.movies to results array
listVenues: adds festivalData.venues to results array
listTickets: adds festivalData.tickets to the results array
listScreenings: adds festivalData.screenings to the results array
default: adds "Invalid action!" to results array
Return the results array */

const festivalData = {
  movies: [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      mainGenre: 'Sci-Fi',
      secondGenre: undefined,
      avgRating: 0,
      available: true,
    },
  ],
  venues: [
    {
      id: 1,
      name: 'Main Theater',
      capacity: 200,
    },
  ],
  screenings: [
    {
      id: 1,
      movieId: 1,
      venueId: 1,
      date: '2023-10-29',
      time: '13:35:00',
      availableSeats: 200,
    },
  ],
  tickets: new Set(),
}; // Fill initial data

function manageFestival(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case 'listMovies':
        // Write your code here
        results.push(festivalData.movies);
        break;
      case 'listVenues':
        // Write your code here
        results.push(festivalData.venues);
        break;
      case 'listTickets':
        // Write your code here
        results.push(festivalData.tickets);
        break;
      case 'listScreenings':
        // Write your code here
        results.push(festivalData.screenings);
        break;
      default:
        results.push('Invalid action!');
        break;
    }
  });

  return results;
}
