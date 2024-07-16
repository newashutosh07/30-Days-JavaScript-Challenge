/* Tasks/Activities:
Activity 1: If-Else Statements
• Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
• Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

// Task 1
let number = 10;
if (number > 0) {
  console.log("It is Positive\n");
} else if (number) {
  console.log("It is Negative\n");
} else {
  console.log("It is Zero\n");
}

//Task 2
let age = 9;
if (age >= 18) {
  console.log("You can Vote\n");
} else {
  console.log("You cannot Vote\n");
}

*/

/*

Activity 2: Nested If-Else Statements
• Task 3: Write a program to find the largest of three numbers using nested if-else statements.
Activity 3: Switch Case
• Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
• Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

//Task 3
let a = 15;
let b = 10;
let c = 2;
if (a > b && a > c) {
  console.log(`${a} is greatest\n`);
} else if (b > a && b > c) {
  console.log(`${b} is greatest\n`);
} else {
  console.log(`${c} is greatest\n`);
}

//Task 4
let num = 7;
switch (num) {
  case 1:
    console.log("Sunday\n");
    break;
  case 2:
    console.log("Monday\n");
    break;
  case 3:
    console.log("Tuesday\n");
    break;
  case 4:
    console.log("Wednesday\n");
    break;
  case 5:
    console.log("Thursday\n");
    break;
  case 6:
    console.log("Friday\n");
    break;
  case 7:
    console.log("Saturday\n");
    break;
  default:
    console.log("Please! Choose a number between 1 to 7\n");
}

*/

/*
Activity 4: Conditional (Ternary) Operator
• Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
Activity 5: Combining Conditions
• Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Task 6:
let number = 5;
number % 2 == 0 ? console.log("It is Even\n") : console.log("It is Odd");

//Task 7:
let year = 2054; // Initialize the year to check

// Check if the year is divisible by 4
if (year % 4 == 0) {
  // If the year is divisible by 4, check if it is also divisible by 100
  if (year % 100 == 0) {
    // If the year is divisible by 100, check if it is also divisible by 400
    if (year % 400 == 0) {
      console.log("It is a Leap Year"); // Year is divisible by 4, 100, and 400
    } else {
      console.log("It is Not a Leap Year"); // Year is divisible by 4 and 100, but not 400
    }
  } else {
    console.log("It is a Leap Year"); // Year is divisible by 4 but not by 100
  }
} else {
  console.log("It is Not a Leap Year"); // Year is not divisible by 4
}
*/

/*
Feature Request:
1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
age and dog the result. 1-7 and logs the dav name.
3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
Achievement:
By the end of these activities, students will:
• Implement and understand basic if-else control flow.
• Use nested if-else statements to handle multiple conditions.
• Utilize switch cases for control flow based on specific values.
• Apply the ternary operator for concise condition checking.
• Combine multiple conditions to solve more complex problems. */
