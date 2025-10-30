/* Challenge

Create a function called formatBlogTitle that:

Takes a blog title string as input
Trims any whitespace from both ends
Makes the first character of each word uppercase
Replaces all occurrences of "Javascript" (case insensitive) with "JavaScript"
Returns the formatted title
Example Input:

"  how to learn javascript for beginners  "

Expected Output:

"How To Learn JavaScript For Beginners" */

function formatBlogTitle(title) {
  // Trim whitespace from both ends
  let trimmedTitle = title.trim();

  // Split the title into words
  let words = trimmedTitle.split(' ');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }

  // Join the words back together
  let formattedTitle = words.join(' ');

  // Replace all occurrences of "javascript" with "JavaScript"
  formattedTitle = formattedTitle.replaceAll('Javascript', 'JavaScript');

  return formattedTitle;
}
