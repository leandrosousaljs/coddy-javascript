/* Challenge

You're given a UserProfile class with the username property already implemented. Your task is to complete the implementation for the email property using getters and setters:

Add a getter for email that returns the current email value
Add a setter for email that:
Validates the email contains the '@' character
If valid:
Updates the email to the new value
Logs exactly: Email updated to [newEmail]
If invalid:
Logs exactly: Invalid email!
Does NOT update the email */

export class UserProfile {
  _username: string;
  _email: string;
  constructor(username: string, email: string) {
    this._username = username;
    this._email = email;
  }

  // Username getter/setter (already complete)
  get username(): string {
    return this._username;
  }

  set username(newName: string) {
    if (newName.length < 3) {
      console.log('Username must be at least 3 characters!');
      return;
    }
    this._username = newName;
    console.log(`Username updated to ${newName}`);
  }

  // TODO: Add a getter for email that returns the current email value
  get email(): string {
    return this._email;
  }
  // TODO: Add a setter for email
  set email(newEmail: string) {
    // TODO: Check if the email contains the '@' character
    if (newEmail.includes('@')) {
      // TODO: If valid: Update the email to the new value
      this._email = newEmail;
      // TODO: Log exactly: Email updated to [newEmail]
      console.log(`Email updated to ${newEmail}`);
      return;
    }
    // TODO: If invalid: Log exactly: Invalid email!
    console.log('Invalid email!');
  }
}
