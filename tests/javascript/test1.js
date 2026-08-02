// var let const
//var - function scope

// function (var) and block scope (Let and const)
// //function is block of code which we can resue
// block



// var a=10;
// console.log(a);
// let b=20;
// console.log(b);
// const c=30;
// console.log(c);

// function test(){
// var a="test";// java script is dynamically typed language so we can assign any type of value to variable
// //var a="Ten"; //reassigning value to variable
// console.log(a);
// //var b:number=20
// }
// test();


// let and const - block scope
// let - we can reassign value to variable but we cannot redeclare variable
// const - we cannot reassign value to variable and we cannot redeclare variable


// function test1(){

//     if(true){
//         let a=30;
//         const b=20;
//         console.log("Value of a:", a);
//         console.log("Value of b:", b);
//     }
// }
// test1();


// function test2(){

//       var c=10;
//          //console.log("Value of c:", c);
//          //var a=85;

//           console.log("Value of c:", c);
//   let d=30;
//         const e=20;
//     if(true){
       
//         console.log(d);
//         // console.log("Value of d:", d);
//         // console.log("Value of e:", e);
//     }
       
//         console.log(e);


// }
//  test2();
// console.log(a);
// var a=10;
// console.log(a);
// var a=20;
//  console.log(a);
        
// var a; //declaration
// console.log(a);

// var a=test;// initializing variable with function name

// var a; //declaration
// a=10;// initialization
// console.log(a);

 // var = variable- constantly changing value
// var a=50;
// let b=20;
// let c=a+b;
// console.log(c);


//var - we dont use in modern javascript because of its function scope and hoisting issues
//let - use let when variable value is changing
// const - use const when variable value is not changing

// let a=10;
// a=20;
// console.log(a);

// const a=10;
// // a=20;
// console.log(a);





// function example (){

//     if(true){
//           var a=10; // block is a part of function so we can access variable outside block because var is function scope
//     }


//     console.log(a); // works because var is function scope
// }
// example();



// function example1 (){


//     let a=10;
//     if(true){
//  // let is part of block so we cannot access variable outside block because let is block scope
// console.log(a);

//     }
//       // ReferenceError: a is not defined
// }
// example1();

// function example2 (){
// var v=1000;


//     if(true){
//         const a=10; // block is a part of function so we can access variable outside block because var is function scope
    
//     var b=20;
//     console.log(a); // works because var is function 
    
// console.log(v); // works because var is function scope



//     }
//     var c=30;
//     console.log(b);
// let d=40;
// console.log(d); // ReferenceError: d is not defined

// }
//     example2();


//what is variable?
// variable is a container which holds data in memory

//javascipt

// let a=10; // number
// // let a="hello"; // string
// // let a=true;
// console.log(a); // 
// let city;
// console.log(city); // undefined
// let salary=null;
// console.log(salary); // null
// let bignum=1234567890123456789012345678901234567890n; // bigint
// console.log(bignum); // 1234567890123456789012345678901234567890n
 
// let id=Symbol("id"); // symbol
// console.log(id); // Symbol(id)


// //non primitives data types - object, array, function, tuple, enum, any, unknown, void, never

// let employee={id:1, name:"John Doe", salary:50000}; // object  
// console.log("Employee:", employee); // { id: 1, name: 'John Doe', salary: 50000 }


// // array - collection of similar data types
// let numbers=[1,2,3,4,5];
// let names=["John", "Doe", "Jane"];
// console.log("Numbers:", numbers); // [ 1, 2, 3, 4, 5 ]
// console.log("Names:", names); // [ 'John', 'Doe', 'Jane' ]

// //reassingment of variable

// var x=10;
// x=20;
// console.log(x); // 20
// // redeclaration of variable0
//  var y=30;
//  var y=40;
//  console.log(y); // 40

//  // tuple - collection of different data types

//  var tuple=[1, "John", true];
// //ennum - collection of named constants
// // enum Color {Red, Green, Blue};// n-1 3-1=2
// // console.log(Color.Red); // 0
// // console.log(Color.Green); // 1
// // console.log(Color.Blue); // 2
// //what is indexing ?
// // Indexing is the process of accessing elements in an array or string using their position (index).
// // void - function which does not return any value



// function test(){
//     console.log("This function does not return any value");
// }


// Hosting - JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function).

// console.log(a); // undefined- data type of a is undefined because variable is declared but not initialized
// var a=10;
console.log(a); // 1
let a=20;
