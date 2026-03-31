/* 2.Create Book Class with Composition

Your task:

In the file called Book.js import the Author class at the top
Create and export a Book class with:
Private fields: #title, #author, #isCheckedOut
Constructor that takes title and author
Two getters: title and authorInfo that returns the author's name
In main.js, add the import for Book class
How Composition is Applied Here:

Composition means "has-a" relationship. In our Book class:

Book HAS-AN Author (not "is-an" Author)
The Book contains an Author instance as one of its components
The Author exists separately and can be used by multiple Books
This is composition: building complex objects (Book) from simpler ones (Author) */

// TODO: Add import for Author class here
import { Author } from './Author.js';
// TODO: Create and export the Book class
export class Book {
  // TODO: Add the private fields: #title, #author, #isCheckedOut
  #title: string;
  #author: Author;
  // TODO: Add a constructor method that takes title and author
  constructor(title: string, author: Author) {
    this.#title = title;
    this.#author = author;
  }
  // TODO: Add a getter method called title that returns the title

  get title(): string {
    return this.#title;
  }

  // TODO: Add a getter method called authorInfo that returns the author's name
  get authorInfo(): string {
    return this.#author.name;
  }
}
