/* Challenge

Create a class named Book in the book.js file with the following:

A constructor that takes title, author, and pages parameters and sets them as properties.
A method called getInfo that returns a string in the format: “Title: [title], Author: [author], Pages: [pages]”
Export the class by adding `export` in front of the `class` */

// TODO: Create a class named Book and export it
export class Book {
  title: string;
  author: string;
  pages: number;
  // TODO: Add a constructor that takes title, author, and pages parameters
  constructor(title: string, author: string, pages: number) {
    // TODO: Set the title, author, and pages parameters as properties.
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  // TODO: Add a method called getInfo that returns a string in the format: “Title: [title], Author: [author], Pages: [pages]”
  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
  }
}
