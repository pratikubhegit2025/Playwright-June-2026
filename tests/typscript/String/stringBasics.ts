// Basic string examples in TypeScript

let firstName: string = 'Pratik';
let lastName: string = 'Patil';
let course: string = 'Playwright with TypeScript';

console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('course:', course);

let fullName: string = firstName + ' ' + lastName;
console.log('fullName:', fullName);

let message: string = 'Welcome to automation testing';
console.log('message:', message);
console.log('length:', message.length);

let emptyText: string = '';
console.log('emptyText length:', emptyText.length);

let multilineText: string = `This is line 1.
This is line 2.
This is line 3.`;
console.log('multilineText:\n' + multilineText);
