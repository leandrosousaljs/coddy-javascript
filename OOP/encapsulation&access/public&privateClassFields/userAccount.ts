/* Challenge

Add two fields into the class named UserAccount:
A public field username
A private field #password
Add a constructor that takes username and password parameters */

export class UserAccount {
  // TODO: Add a public field username
  username: string = '';
  // TODO: Add a private field #password
  #password: string = '';
  // TODO: Add a constructor that takes username and password parameters and sets them as properties
  constructor(username: string, password: string) {
    this.username = username;
    this.#password = password;
  }
}
