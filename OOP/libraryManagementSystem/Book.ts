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

import { Author } from './Author.js';

export class Book {
  #title: string;
  #author: Author | null; // Composition: Book HAS-AN Author
  #isCheckedOut: boolean = false;

  constructor(title:string , author: Author) {
    this.#title = title;

    // TODO: Check if the author is valid (an instance of Author class)
    // use author instanceof Author
    if (author instanceof Author) {
      // TODO: If the author is valid, set this.#author to author
      this.#author = author;
    } else {
      // TODO: Otherwise (author is invalid), log exactly: "Invalid author: must be Author instance"
      console.log('Invalid author: must be Author instance');
      // TODO: Set this.#author = null
      this.#author = null;
    }
  }

  // Getter for title (read-only)
  get title(): string {
    return this.#title;
  }

  // Getter for author info
  get authorInfo(): string {
    return this.#author.name;
  }
}
