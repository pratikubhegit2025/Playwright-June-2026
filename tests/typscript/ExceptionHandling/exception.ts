// // // // what is exception handling in typescript?
// // // // exception handling is a mechanism to handle runtime errors in a program.
// // // // it allows us to catch and handle errors gracefully without crashing the program.
// // // // in typescript, we can use try-catch block to handle exceptions.



// // // // types of errors in typescript
// // // // 1. compile time errors - these errors are detected by the compiler at compile time. for example, syntax errors, type errors, etc.
// // // // 2. runtime errors - these errors occur during the execution of the program. for example, null reference errors, division by zero, etc.



// // // // compile time errors
// // // // 1. syntax errors - these errors occur when the code violates the syntax rules of the language. for example, missing semicolon, missing parenthesis, etc.

// // //    // let x number = 10 // error: missing semicolon
// // //     let y: number = 10; // correct syntax
// // //     console.log(y); // output: 10
// // // // syntax errors are detected by the compiler at compile time and prevent the program from running until they are fixed.
// // // // type errors - these errors occur when the code violates the type rules of the language. for example, assigning a string to a number variable, etc.

// // // let a: number = 10; // correct syntax
// // // // a = "hello"; // error: type 'string' is not assignable to type 'number'
// // // a = "20"; // invalid syntax
// // // console.log(a); // output: 20
// // // // type errors are detected by the compiler at compile time and prevent the program from running until they are fixed.

// // // // missing variable errors - these errors occur when the code tries to access a variable that is not defined. for example, accessing an undefined variable, etc.q


// // //console.log(a); // missing variable error: 'a' is not defined


// // // duplicate identifier error
// // // // same variable or same classname 
// // // let a:number=20;
// // // let a:number=20;



// // // Ruuntime errors
// // // error
// // //typeError
// // // RefrenceError
// // //RangeError




// // // const person : any=null;
// // // console.log(person.name);

// // // Refrence Error
// // console.log(username)

// //reange Error
// const arr = new Array(-5);


// How to handle exceptions
// to handle exceptions we have 4 keywords- Try,Catch,Throw and Finally


class trynCatch{

display():void{try{
    console.log("This is try block");
}
catch (error:any){

console.log("Exception caught");

}
}

}

let obj = new trynCatch();

obj.display();



console.log("-------------------------runtime---------------------------------")



class TryCatch {

    display(): void {

        try {

            const person: any = null;

            console.log(person.name);

        } catch (error: any) {

            console.log("Exception Caught");
            console.log(error.message);

        }
    }
}

const obj1 = new TryCatch();

obj1.display();









