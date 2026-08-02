// var fullname: string = "John Doe";
// let ageValue: number = 25;
// const gradeValue: string = 'A';
// console.log("Full Name: " + fullname);
// console.log("Age: " + ageValue);
// console.log("Grade: " + gradeValue);

// let cValue: number = 99.02;
// console.log("Value of c: " + cValue);
// let studentNames: string[] = ['Reading', 'Writing', 'Math']; // Array of strings
// console.log("Student Name: " + studentNames);

// let currentUser: { id: number; name: string } = { id: 1, name: "John Doe" }; // Object
// console.log("Users:" + currentUser.id + " " + currentUser.name);

// // let activeStatus: boolean = true; // Boolean
// // console.log("Is Active: " + activeStatus);
// // let nullValue: null = null; // Null
// // let undefinedValue: undefined = undefined; // Undefined

// // console.log("Value of abcd: " + nullValue);
// // console.log("Value of xyz: " + undefinedValue);


// function test():void {
//     console.log("This function does not return any value");
// }
// test();

// //unknown type
// let value: unknown = 10;
// console.log("Value of unknown: " + value);

// value = "Hello";
// console.log("Value of unknown: " + value);

// value = true;
// console.log("Value of unknown: " + value);
// value = { name: "John", age: 30 };
// console.log("Value of unknown: " + value);
// value = [1, 2, 3];
// console.log("Value of unknown: " + value);


// unknown and any type

// unknown type is a type-safe counterpart of any. It means that you can assign any value to a variable of type unknown, but you cannot perform any operations on it without first asserting its type. On the other hand, any type allows you to perform any operation on it without any type checking.
// any type is a type that can hold any value, and it allows you to perform any operation on it without any type checking. It is similar to the unknown type, but it is less strict and can lead to runtime errors if not used carefully.

// var a=10;
// a=20;
// console.log("Value of a: " + a);

// let b=20;
// b=30;
// console.log("Value of b: " + b);

//never type


// function throwError(message: string): never {



//     throw new Error(message);
// } /

// Hosting


// var x;
// console.log("Value of x: " + x); // Output: undefined

// let y;
// y=10;
// console.log("Value of y: " + y); // Output: undefined

// const z;
//  console.log("Value of z: " + z); // Output: undefined


//  console.log(a);
//  let a =10;  
 
 console.log(b); /
 
 var b: number = 20//
 // Output: 20


 let c: number = 30;
console.log("Value of c: " + c); 
 

 // Output: ReferenceError: Cannot access 'c' before initialization
 console.log(d);
 const d: number = 40;
 console.log("Value of d: " + d); // Output: ReferenceError: Cannot access 'd' before initialization
 
 

 

// what is hoisting in typescript?
//is let is hoisted in typescript?
//ans> let variable are hoisted but can not b e accesses before initialization. They are in a "temporal dead zone"(TDZ) from the start of the block until the declaration is encountered. This means that if you try to access a let variable before it is declared, you will get a ReferenceError.


// is const is hoisted in typescript?
//ans> const variables are hoisted to the top of their block scope, but they are not initialized until the point of declaration is reached. This means that if you try to access a const variable before it is declared, you will get a ReferenceError.


// is var is hoisted in typescript?
//ans> Yes, var variables are hoisted to the top of their scope and can be accessed before they are declared. However, they will be undefined until the point of declaration is reached. This can lead to unexpected behavior if not used carefully.
// 
