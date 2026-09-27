/*
 * Learning guide: Iterating and transforming array values.
 * Learn: forEach, map, filter, reduce, some, and every.
 * Rules: Use forEach for side effects, map to create transformed arrays, and filter to select matching values.
 */

// Theory:
// 1. forEach, map, filter, reduce, some, and every are very useful array methods.
// 2. These methods are commonly used for reading data, transforming values, filtering results, and validating conditions.
// 3. `forEach` is used for visiting each element.
// 4. `map` creates a new array by transforming each element.
// 5. `filter` creates a new array with matching elements only.
// 6. `reduce` combines all values into a single result.
// 7. `some` checks whether at least one element matches a condition.
// 8. `every` checks whether all elements match a condition.

console.log('======================== forEach ========================');

let fruits: string[] = ['Banana', 'Mango', 'Apple']; // Array of fruit names.
fruits.forEach((fruit, index) => {
  console.log(index, fruit); // Prints index and value for each element.
});

let nums: number[] = [10, 20, 30]; // Number array.
nums.forEach((num) => {
  console.log(num * 2); // Multiplies each number by 2 and prints it.
});

console.log('======================== map ========================');

let numbers: number[] = [10, 20, 30, 40, 50]; // Correct array declaration.
let result = numbers.map((number) => {
  return number % 2; // Creates a new array with remainder values.
});

console.log('Original Array:', numbers); // map does not change the original array.
console.log('New Array:', result); // New mapped array.

let names: string[] = ['praTIk', 'tejas', 'pranav'];
let upperCaseNames = names.map((name) => {
  return name.toUpperCase(); // Converts each string to uppercase.
});

console.log(upperCaseNames);

console.log('======================== filter ========================');

let numberList: number[] = [10, 20, 30, 40, 50];
let greaterThanTwentyFive = numberList.filter((number) => number > 25); // Keeps only values greater than 25.
console.log(greaterThanTwentyFive);

let cityNames: string[] = ['pune', 'satara', 'Sangali'];
let startsWithS = cityNames.filter((city) => city.startsWith('S')); // Keeps only values starting with S.
console.log(startsWithS);

console.log('======================== reduce ========================');

let sumNumbers: number[] = [10, 20, 30];
let total = sumNumbers.reduce((runningTotal, currentValue) => {
  return runningTotal + currentValue; // Adds all array values into one final result.
}, 0);

console.log(total);

console.log('======================== some ========================');

let someNumbers: number[] = [10, 20, 30];
let hasGreaterThanForty = someNumbers.some((number) => number > 40); // True if at least one value matches.
console.log(hasGreaterThanForty);

console.log('======================== every ========================');

let everyNumbers: number[] = [50, 40, 90, 60];
let allBelowHundred = everyNumbers.every((number) => number < 100); // True only if all values match.
console.log(allBelowHundred);
