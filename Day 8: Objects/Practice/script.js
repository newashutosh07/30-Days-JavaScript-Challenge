// singleton

// object literals
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
