// Theory:
// 1. A string is a sequence of characters such as letters, numbers, spaces, or symbols.
// 2. In TypeScript, we declare a string variable by using the type `string`.
// 3. Strings are immutable, which means string methods do not change the original value.
// 4. Most string methods return a new string or useful information like length or position.
// 5. String methods are commonly used for validation, formatting, searching, and cleaning text.

// String methods in TypeScript with explanation comments.

let city: string = 'I love India'; // A string value stored in a variable named city.
let language: string = 'TypeScript'; // Another string used for practice examples.
let text: string = 'Hello World'; // A simple string for replace examples.
let fruits: string = 'Apple,Apple,Apple'; // A string containing repeated words.
let spacedText: string = '   Pune   '; // A string with extra spaces before and after the word.

console.log('============= length ============='); // Section heading for length.
console.log(city.length); // length returns the total number of characters in the string.

console.log('============= toUpperCase ============='); // Section heading for uppercase.
console.log(city.toUpperCase()); // Converts all letters to uppercase.

console.log('============= toLowerCase ============='); // Section heading for lowercase.
console.log(city.toLowerCase()); // Converts all letters to lowercase.

console.log('============= charAt ============='); // Section heading for charAt.
console.log(city.charAt(7)); // charAt returns the character present at the given index.

console.log('============= indexOf ============='); // Section heading for indexOf.
console.log(city.indexOf('India')); // indexOf returns the starting position of the given text.

console.log('============= includes ============='); // Section heading for includes.
console.log(city.includes('love')); // includes checks whether the given text exists in the string.

console.log('============= startsWith ============='); // Section heading for startsWith.
console.log(language.startsWith('Type')); // Checks whether the string starts with the given text.

console.log('============= endsWith ============='); // Section heading for endsWith.
console.log(language.endsWith('Script')); // Checks whether the string ends with the given text.

console.log('============= replace ============='); // Section heading for replace.
console.log(text.replace('World', 'Pune')); // Replaces the first matching word with a new word.
console.log(text.replace('Hello', 'Welcome')); // Replaces Hello with Welcome.

console.log('============= replaceAll ============='); // Section heading for replaceAll.
console.log(fruits.replaceAll('Apple', 'Mango')); // Replaces all matching words in the string.

console.log('============= substring ============='); // Section heading for substring.
console.log(language.substring(0, 4)); // Returns characters from index 0 up to index 4, excluding 4.

console.log('============= slice ============='); // Section heading for slice.
console.log(language.slice(4, 10)); // Extracts part of the string from index 4 to 10.

console.log('============= split ============='); // Section heading for split.
console.log(city.split(' ')); // Splits the string into an array using space as the separator.

console.log('============= trim ============='); // Section heading for trim.
console.log(spacedText); // Prints the original string with spaces.
console.log(spacedText.length); // Prints the length before removing spaces.
console.log(spacedText.trim()); // trim removes spaces from both the start and end.
console.log(spacedText.trim().length); // Prints the length after trimming spaces.

console.log('============= trimStart ============='); // Section heading for trimStart.
console.log(spacedText.trimStart()); // Removes spaces only from the beginning of the string.

console.log('============= trimEnd ============='); // Section heading for trimEnd.
console.log(spacedText.trimEnd()); // Removes spaces only from the end of the string.
