/*
 * Learning guide: Common array methods.
 * Learn: adding, removing, searching, sorting, slicing, and splicing values.
 * Rules: Know whether a method mutates the original array; use slice when you need a non-mutating copy.
 */

// Theory:
// 1. Array methods help us add, remove, search, sort, and modify array values.
// 2. Some methods change the original array, such as push, pop, shift, unshift, sort, reverse, and splice.
// 3. Other methods can return values or new arrays depending on the operation.
// 4. Learning array methods is important for automation, test data handling, and general programming.

// Common array methods in TypeScript.

let studentNames: string[] = ['Pratik', 'Vijay', 'Satish', 'Aditya']; // Original array.
console.log('Original array:', studentNames);

console.log('============= push =============');
studentNames.push('Ketan'); // Adds one new element at the end.
console.log(studentNames);

console.log('============= pop =============');
studentNames.pop(); // Removes the last element.
console.log(studentNames);

console.log('============= unshift =============');
studentNames.unshift('Tejas'); // Adds one new element at the beginning.
console.log(studentNames);

console.log('============= shift =============');
studentNames.shift(); // Removes the first element.
console.log(studentNames);

console.log('============= includes =============');
console.log(studentNames.includes('Vijay')); // Returns true if the value exists.

console.log('============= indexOf =============');
console.log(studentNames.indexOf('Vijay')); // Returns the index of the matching element.

console.log('============= sort =============');
studentNames.sort(); // Sorts array values in ascending alphabetical order.
console.log(studentNames);

console.log('============= reverse =============');
studentNames.reverse(); // Reverses the current array order.
console.log(studentNames);

console.log('============= slice =============');
console.log(studentNames.slice(1, 3)); // Returns elements from index 1 to 3, excluding 3.
console.log(studentNames); // slice does not change the original array.

console.log('============= splice remove =============');
studentNames.splice(1, 1); // Removes 1 element from index 1.
console.log(studentNames);

console.log('============= splice add =============');
studentNames.splice(1, 0, 'Vijay'); // Adds Vijay at index 1 without removing elements.
console.log(studentNames);

console.log('============= splice replace =============');
studentNames.splice(2, 1, 'Rahul'); // Replaces 1 element at index 2 with Rahul.
console.log(studentNames);
