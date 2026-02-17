/* Challenge

Create a constructor function named Book that takes three arguments:
title (String)
author (String)
pages (Number)
The function should set these as properties on the object created. 

2. Add a method called getSummary that returns a string with some information about the book: this.title + " was written by " + this.author + " and has " + this.pages + " pages"; */

// TODO: Create a constructor function named Book that takes three arguments (title, author, pages)
function Book(this: any, title: string, author: string, pages: number) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.getSummary = function () {
    return this.title + ' was written by ' + this.author + ' and has ' + this.pages + ' pages';
  };
}

// TODO: Set these as properties on the object created

// TODO: Add a method called getSummary that returns a string with some information about the book.
// For example: Harry Potter was written by Rowling and has 500 pages

// Don't modify the code below
const inputTitle = inp[0]; // First line: book title
const inputAuthor = inp[1]; // Second line: author
const inputPages = parseInt(inp[2]); // Third line: number of pages

const book = new Book(inputTitle, inputAuthor, inputPages);
console.log(book.getSummary());
