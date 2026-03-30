/* Challenge

1.In this project we'll build a library system where books track authors and availability.

Your task:

In the file called Author.js, create an Author class with:
A constructor that takes one parameter: name
It should store the name as: this.name = name
Export the class using export
In main.js, import the class */

// TODO: Create an Author class and export it
export class Author {
  name: string;
  // TODO: Add a constructor method that takes one parameter: name
  constructor(name: string) {
    // TODO: Store the name as: this.name = name
    this.name = name;
  }
}
