// // //Opeators

// // //1. Arithmetic Operators

// // let a:number = 20;
// // let b: number = 10;
// // let result: number;

// // let f:number = 10; m:number = 20; n:number = 30;


// // result = a + b; // Addition // 30
// // console.log("Addition: " + result);

// // result = a - b; // Subtraction //10
// // console.log("Subtraction: " + result);

// // result = a * b; // Multiplication//200
// // console.log("Multiplication: " + result);

// // result = a / b; // Division/ 2
// // console.log("Division: " + result);

// // result = a % b; // Modulus//0
// // console.log("Modulus: " + result);


// // // Assignment Operators

// // let x: number = 10;
// // let y: number = 5; // = is assignment operators

// // x+=2; // x = x + 2
// // console.log("x+=2: " + x); // 12

// // x-=2; // x = x - 2
// // console.log("x-=2: " + x); // 10

// // x*=2; // x = x * 2      
// // console.log("x*=2: " + x); // 20

// // x/=2; // x = x / 2
// // console.log("x/=2: " + x); // 10
// //     x%=2; // x = x % 2
// // console.log("x%=2: " + x); // 0

// // x**=2; // x = x ** 2
// // console.log("x**=2: " + x); // 0

// // Comparison Operators

// let num1: number = 10;
// let num2: number = 20;

// console.log(num1==num2); // false
// console.log(num1!=num2); // true

// let c2: number = 10;
// let d: number = 10;
// // make 'e' possibly a number so comparisons with 'c' are valid
// let e: number | string = "10";
// console.log(c2==d); // true
// console.log(c2!==e); // true
// console.log(c2===e); // false

// console.log(num1>num2); // false
// console.log(num1<num2); // true
// console.log(num1>=num2); // false
// console.log(num1<=num2); // true
// console.log(num1!==num2); // true
// console.log(c2!==num1); // false


// let name1: string = "Pratik";
// let name2: string = "Pratik";
// console.log(name1===name2); // true

// let a : number = 10;
// let b : string  = 10;

// console.log(a==b);// true   
// // double equal operator (==) checks for value equality, so it returns true because both a and b have the same value of 10.

// // triple equal operator (===) checks for both value and type equality, so it returns false because a is a number and b is a string.
// console.log(a===b);// false

// let a: boolean = true;
// let b: boolean = true;
// //console.log(a && b); // false
// console.log(a && b); // true

// let c: boolean = false;
// let d: boolean = false;
// console.log(c && d); // false

//or operator

// let a1: boolean = true;
// let b1: boolean = false;
// console.log(a1 || b1); // true

// let c1: boolean = false;
// let d1: boolean = false;
// console.log(c1 || d1); // false

// let e1: boolean = true;
// let f1: boolean = true;
// console.log(e1 || f1); // true

// let g1: boolean = false;
// let h1: boolean = true;

// console.log(g1 || h1); // true


// let login: boolean = true;
// console.log(!login); // false

// Increment and Decrement Operators


let num: number = 10; //increasing value of num by 1
// let result= num+1;
// console.log("Incremented value: " + result); // 11,12,13,14,15

// let result=num++; // post-increment operator 
// console.log("Post-incremented value: " + result); // value of num is used in the expression first, so result will be 10 and num will be incremented to 11 after the expression is evaluated.

// let result1=++num; // pre-increment operator
// console.log("Pre-incremented value: " + result1); // value of num is incremented before it is used in the expression, so result1 will be 11 and num will also be 11.

// let result2=num--; // post-decrement operator
// console.log("Post-decremented value: " + result2); // value of num is used in the expression first, so result2 will be 10 and num will be decremented to 9 after the expression is evaluated.

// let result3=--num; // pre-decrement operator
// console.log("Pre-decremented value: " + result3); // value of num is decremented before it is used in the expression, so result3 will be 9 and num will also be 9.


// let count: number = 10;
// count +=2;
// console.log("Count after +=2: " + count); // 12



//  let name: string = "Pratik"; //kitarp, 


// ternary operator


// let age: number = 10;
// let eligibility: string = (age >= 18) ? "Eligible to vote" : "Not eligible to vote"; // if and else condition
// console.log(eligibility); // Eligible to vote















