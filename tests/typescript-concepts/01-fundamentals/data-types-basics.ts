/*
 * Learning guide: Type annotations and basic values.
 * Learn: string, number, boolean, arrays, objects, null, undefined, and union types.
 * Rules: Declare the intended type, use meaningful variable names, and run this file after changing one value.
 */

let fullName: string = 'Pratik';
let age: number = 25;
let isActive: boolean = true;

let score: number = 99.5;
let city: string = 'Pune';
let hobbies: string[] = ['reading', 'testing', 'coding'];
let user: { id: number; role: string } = {
  id: 1,
  role: 'QA',
};
let nothing: null = null;
let notAssigned: undefined = undefined;
let mixedValue: string | number = 'Automation';
console.log('fullName:', fullName);
console.log('age:', age);
console.log('isActive:', isActive);
console.log('score:', score);
console.log('city:', city);
console.log('hobbies:', hobbies);
console.log('user:', user);
console.log('nothing:', nothing);
console.log('notAssigned:', notAssigned);
console.log('mixedValue:', mixedValue);
