/*
 * Learning guide: Compile-time errors versus runtime exceptions.
 * Learn: The TypeScript compiler catches type and syntax problems before code runs.
 *        Runtime exceptions happen while the program is running and can be handled with try/catch.
 * Rules: Keep compile-time-error examples commented so this lesson can run. Never use try/catch to hide type errors.
 */

console.log('========== COMPILE-TIME ERROR EXAMPLES ==========');

// Compile-time errors are found by TypeScript before the program runs.
// They cannot be handled with try/catch because the code must compile first.

// Example 1: Type mismatch
// let age: number = 'twenty-five';
// Error: Type 'string' is not assignable to type 'number'.

// Example 2: Missing function argument
function add(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

console.log('Valid add result:', add(10, 20));
// console.log(add(10));
// Error: Expected 2 arguments, but got 1.

// Example 3: Accessing a property that is not part of the type
type Student = {
  name: string;
  age: number;
};

const student: Student = { name: 'Pratik', age: 25 };
console.log('Student name:', student.name);
// console.log(student.course);
// Error: Property 'course' does not exist on type 'Student'.

// Example 4: Syntax error
// const total = (10 + 20;
// Error: ')' expected. The compiler cannot run invalid syntax.

console.log('\n========== RUNTIME EXCEPTION EXAMPLES ==========');

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

// Runtime example 1: Throw and handle a custom validation error.
function divide(firstNumber: number, secondNumber: number): number {
  if (secondNumber === 0) {
    throw new Error('A number cannot be divided by zero.');
  }

  return firstNumber / secondNumber;
}

try {
  console.log('Division result:', divide(20, 0));
} catch (error: unknown) {
  console.log('Division error:', getErrorMessage(error));
} finally {
  console.log('Division example completed.');
}

// Runtime example 2: Accessing a property of null causes a TypeError.
type UserProfile = {
  name: string;
};

const profile: UserProfile | null = null;

try {
  console.log(profile!.name);
} catch (error: unknown) {
  console.log('Null-property error:', getErrorMessage(error));
}

// Runtime example 3: Invalid JSON text causes a SyntaxError.
const invalidJson = '{ "name": "Pratik", }';

try {
  const parsedValue: unknown = JSON.parse(invalidJson);
  console.log(parsedValue);
} catch (error: unknown) {
  console.log('JSON error:', getErrorMessage(error));
}

console.log('\nLesson completed.');
