// singleton

// object literals
/*
const mySym = Symbol("key1"); //VVI for Interview

const jsUser = {
  name: "Ashutosh",
  "full Name": "Ashutosh Chaudhary",
  [mySym]: "myKey1",
  age: 17,
  location: "Lalitpur",
  email: "newashutosh.team7@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(jsUser.email);

//use this method to access objects
// console.log(jsUser["name"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]); //VVI for Interview

// Object.freeze(jsUser);

jsUser.email = "ashutosh@yt.com";

// console.log(jsUser);
jsUser.greeting = function () {
  console.log("Hello JS user!");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
*/

//Part 2
const tinderUser = new Object(); //Singleton
// const tinderUser = {}; //non-Singleton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstName: "Ashutosh",
      lastName: "Chaudhary",
    },
  },
};

// console.log(regularUser.fullName.userfullname.lastName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
