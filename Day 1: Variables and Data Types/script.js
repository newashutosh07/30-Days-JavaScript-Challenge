//Short-cut Key for Multi-Line Commet Shift+Option+A

/*
Activity 1: Variable Declaration
• Task 1: Declare a variable using var, assign it a number, and log the value to the console.
• Task 2: Declare a variable using let , assign it a string, and log the value to the

var value = 5;
console.log(value);

let name = "Ashutosh";
console.log(name);
*/

/*
Activity 2: Constant Declaration
• Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const value = false;
console.log(value);
*/

/* 
Activity 3: Data Types
• Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const number = 69;
const string = "Chaudhary";
const boolean = true;
const object = {
    name: "Ashutosh Chaudhary",
    age: 17,
};
const array = [17, "Ashutosh Chaudhary", true];
console.log(number, typeof number);
console.log(string, typeof string);
console.log(boolean, typeof boolean);
console.log(object, typeof object);
console.log(array, typeof array);
console.log(Array.isArray(array)); // true
*/

/* 
Activity 4: Reassigning Variables
• Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let value = 1;
console.log(value);
value = 2;
console.log(value);
*/

/* 
Activity 5: Understanding const
• Task 6: Try reassigning a variable declared with const and observe the error.

const name = "Ashutosh";
console.log(name);
name = "Chaudhary";
console.log(name);
// TypeError: Assignment to constant variable.

*/

/* 

Feature Request:
1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
Achievement:
By the end of these activities, you will:
• Know how to declare variables using var, let, and const .
• Understand the different data types in JavaScript.
• Be able to use the typeof operator to identify the data type of a variable.
• Understand the concept of variable reassignment and the immutability of const variables.

let name = "Ashutosh";
let age = 17;
console.log(typeof name);
console.log(typeof age);
*/

const age = 17;
age = 12;
console.log(age);

let name = "Ashutosh";
name = "Rosé";
console.log(name);
