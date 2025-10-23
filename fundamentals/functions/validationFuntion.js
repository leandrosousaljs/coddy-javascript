/* Challenge

Write a function named isValid that gets two string arguments, username and password.

The function will return True if the username and password are valid in the system, otherwise False.

Our system contains only two valid usernames - "admin" and "user".

The valid password for username "user" is "qweasd".

For username "admin" any password is valid! */

const isValid = (username, password) => {
  if (username === 'admin') {
    return true;
  } else if (username === 'user' && password === 'qweasd') {
    return true;
  } else {
    return false;
  }
};
