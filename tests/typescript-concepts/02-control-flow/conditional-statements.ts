/*
 * Learning guide: Making decisions with conditional statements.
 * Learn: if, else if, else, and switch statements.
 * Rules: Use === for equality, keep conditions readable, and include a default case in switch statements.
 */

// Conditional statements in TypeScript allow you to execute different
// blocks of code based on certain conditions.

// if conditional statement
let age: number = 18;
if (age >= 18 && age <= 65) {
    console.log("You are eligible to vote.");
}

// nested if else conditional statement
let signal: string = "yellow";
if (signal === "green") {
    console.log("You can go.");
} else if (signal === "yellow") {
    console.log("Get ready to stop.");
} else {
    console.log("You must stop.");
}

// if else conditional statement
let voterAge: number = 12;
if (voterAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// marks classification using else if
// 60 = First Class
// 50 = Second Class
// 40 = Third Class
// 35 = Pass Class
// below 35 = Fail
let marks: number = 51;
if (marks >= 60) {
    console.log("First Class");
} else if (marks >= 50) {
    console.log("Second Class");
} else if (marks >= 40) {
    console.log("Third Class");
} else if (marks >= 35) {
    console.log("Pass Class");
} else {
    console.log("Fail");
}

// switch case
// week days = 7
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
let day: number = 9;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
