/*
 * Learning guide: Function declarations, expressions, arrows, parameters, and return types.
 * Learn: how functions package reusable behavior and how TypeScript checks inputs and outputs.
 * Rules: Type parameters and return values, use void only when nothing is returned, and call a function with all required arguments.
 */

// non parameterized function



// function greet(){
//     console.log("Hello, World!");
// }
// greet(); // calling the function
// greet(); // calling the function
// greet(); // calling the function

// parameterized function - named function

// function add (a: number, b: number) {
//     console.log(a + b);
//     return a + b;
    
// } // function definition
// add(10, 20); // function call
// anonymous function - function without name


//

const greet = function() {
    console.log("Hello");
};

greet();

// arrow function - shorter syntax for writing functions - ES6 feature
//ES6 - ECAMA Script 2015

const greet1=() => {
    console.log("Hello");
}
greet1();

//VOID
// VOID is a return type of function which does not return any value. It is used when a function does not have a return statement or when it returns undefined. In TypeScript, you can specify the return type of a function as void by using the void keyword.
//let message: string = "Hello, World!";




function greet2(): void {
    console.log("Hello, World!");
}       
greet2(); // calling the function
greet1();

function add(a: number, b: number): number {
    return a+b;
}
console.log('Addition:', add(10, 20));















