// Day 7: Objects
// Tasks/Activities:

/*
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
// • Task 2: Access and log the title and author properties of the book object.

//Task 1
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

console.log(book);

// Task 2
console.log(
  `Name of the Book is ${books.title} and Author of the book is ${books.author}`
);



// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

//Task 3
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDescription: function getDescription() {
    return this.title + this.author;
  },
  updateYear: function updateYear(year) {
    this.year = year;
  },
};

// console.log(book.getDescription);
book.updateYear(2005);
console.log(book);


// Activity 3: Nested Objects
// : Task 5: Crete a nested objects representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
//Task 5
let library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      getDescription: function () {
        return this.title;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      getDescription: function () {
        return this.title;
      },
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      getDescription: function () {
        return this.title;
      },
    },
  ],
};

console.log(`Name of the library is ${library.name}`);

library.books.forEach((book) => {
  console.log(`Name of the books in library is ${book.getDescription()}`);
});



// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
// • Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.

let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

for (property in book) {
  console.log(`Property is ${property} and its value is ${book[property]}`);
}

console.log(
  `Property is ${Object.keys(book)} and its value is ${Object.values(book)}`
);

*/

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for... in loop and Object. keys / Object. values .
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate objects with properties and methods.
// • Understand and use the this keyword in object methods.
// • Work with nested objects and arrays of objects.
// • Iterate over an object's properties using loops and built-in methods.
