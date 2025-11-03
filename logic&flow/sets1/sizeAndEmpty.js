/* Challenge

Create a function named partyPlanner that takes an array of RSVPs (strings of names). Some people may have RSVP'd multiple times out of excitement. The function should return an object with:

uniqueGuests: The number of unique guests attending
hasDuplicates: A boolean indicating if anyone RSVP'd more than once
isEmpty: A boolean indicating if no one RSVP'd */

function partyPlanner(rsvps) {
  let guestSet = new Set(rsvps);

  return {
    uniqueGuests: guestSet.size,
    hasDuplicates: guestSet.size < rsvps.length,
    isEmpty: rsvps.length === 0,
  };
}
