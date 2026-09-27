/*
 * Learning guide: Handling an expected error during division.
 * Learn: throw creates an error, catch handles it, and finally always runs afterward.
 * Rules: Validate invalid input early, catch unknown errors safely, and use finally only for cleanup work.
 */

class Calculator {
divide(a:number,b:number):void{

try {

    if (b===0){

 throw new Error ("Can not divide by 0");
    }

console.log("Successfully Executed:", a/b);}
catch (error: unknown){
    const message = error instanceof Error ? error.message : String(error);
    console.log("Error is:", message)
}
finally {

    console.log("Successfully executed");
}

}

}


let calculator = new Calculator();

calculator.divide(20, 5);
calculator.divide(20, 0);
