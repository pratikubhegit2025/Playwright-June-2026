/*
 * Learning guide: Creating and reading arrays.
 * Learn: array declarations, zero-based indexes, length, loops, and ways to add values.
 * Rules: Use a typed array for similar data, remember the first index is 0, and check length before reading an index.
 */

// Theory:
// 1. An array is a collection of multiple values stored in a single variable.
// 2. In TypeScript, arrays can be written as `string[]`, `number[]`, or `Array<number>`.
// 3. Array values are stored using indexes, and indexing starts from 0.
// 4. Arrays are useful when we want to store and process a list of similar values.
// 5. We can read, add, update, remove, and loop through array elements.

// Basic array examples in TypeScript.

let studentNames: string[] = ['Pratik', 'Vijay', 'Akshay']; // Array of string values.
console.log(studentNames); // Prints the complete array.
console.log(studentNames[2]); // Prints the value at index 2.
console.log(studentNames.length); // Prints the total number of elements.

// Indexing example:
// Index     0         1        2
// Value  Pratik    Vijay    Akshay

let numbers: Array<number> = [10, 20, 30, 40]; // Array<number> is another valid way to declare a number array.
console.log(numbers); // Prints the complete number array.
console.log(numbers[0]); // Prints the first element.

console.log('Printing all student names using for loop');
for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i]); // Reads and prints each element one by one.
}

let test: string[]; // Array declared first and assigned later.

console.log('Method 1 - Direct assignment');
test = ['Hello', 'World', 'TypeScript']; // Assigning values directly.
console.log(test);

console.log('Method 2 - Using push()');
let colors: string[] = []; // Empty array creation.
colors.push('Red'); // Adds a value at the end.
colors.push('Blue');
colors.push('Green');
console.log(colors);

console.log('Method 3 - Using index');
let scores: number[] = []; // Empty number array.
scores[0] = 100; // Adds value at index 0.
scores[1] = 200; // Adds value at index 1.
scores[2] = 300; // Adds value at index 2.
console.log(scores);

console.log('Method 4 - Initialize with values');
let cities: string[] = ['New York', 'London', 'Tokyo']; // Array created with initial values.
console.log(cities);

console.log('Method 5 - Using spread with push');
let animals: string[] = []; // Empty array.
animals.push(...['Cat', 'Dog', 'Bird']); // Adds multiple values at once.
console.log(animals);

console.log('Method 6 - Using concat()');
let arr1: string[] = ['Apple'];
let arr2: string[] = ['Banana', 'Mango'];
arr1 = arr1.concat(arr2); // Merges two arrays and returns a new array.
console.log(arr1);
