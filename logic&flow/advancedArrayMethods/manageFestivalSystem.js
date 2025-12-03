/* Challenge

1.You will be creating a Movie Festival Management System. Start by initializing the system with the provided data and creating the main function structure.

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
Return the results array 

2.Add two new cases to your switch statement: addMovie and addVenue.

For addMovie, the data parameter contains:

title (string)
director (string)
year (number)
mainGenre (string)
secondGenre (string)
The function should:

Create a new movie object with:
id: generate by adding 1 to the length of movies array
title, director, year, and mainGenre, secondGenre from the data
avgRating: 0
available: true
Add the movie to festivalData.movies array
Add Movie added successfully! to results array
For addVenue, the data parameter contains:

name (string)
capacity (number)
The function should:

Create a new venue object with:
id: generate by adding 1 to the length of venues array
name and capacity from the data
Add the venue to festivalData.venues array
Add Venue added successfully! to results array 

3.Add a new test case to your switch statement: addScreening.

For addScreening the data parameters contains:

movieId (number)
venueId (number)
date (string in 'YYYY-MM-DD' format)
time (string in 'HH:MM:SS' format)
The function should:

Validate if movie and venue exist
Check if there's no screening at the same venue, date and time
Create a new screening object with:
id: generate by adding 1 to the length of screening array
movieId, venueId, date, and time from the data
availableSeats: equal to venue's capacity
Add the screening to festivalData.screenings array
Add Screening added successfully! to results array */

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
      case 'addMovie':
        // Write your code here
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };

        festivalData.movies.push(newMovie);

        results.push('Movie added successfully!');
        break;
      case 'addVenue':
        // Write your code here
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };

        festivalData.venues.push(newVenue);

        results.push('Venue added successfully!');
        break;
      case 'addScreening':
        const movie = festivalData.movies.find(m => m.id === currentData.movieId);
        const venue = festivalData.venues.find(v => v.id === currentData.venueId);
        const conflict = festivalData.screenings.some(
          s => s.venueId === currentData.venueId && s.date === currentData.date && s.time === currentData.time
        );

        if (movie && venue && !conflict) {
          const newScreening = {
            id: festivalData.screenings.length + 1,
            movieId: currentData.movieId,
            venueId: currentData.venueId,
            date: currentData.date,
            time: currentData.time,
            availableSeats: venue.capacity,
          };

          festivalData.screenings.push(newScreening);

          results.push('Screening added successfully!');
        }

        if (!movie || !venue) results.push('Movie or venue not found!');
        else if (conflict) results.push('Screening already exists at this time!');

        break;
      default:
        results.push('Invalid action!');
        break;
    }
  });

  return results;
}
