class calculatoro{
divide(a:number,b:number):void{

try {

    if (b===0){

 throw new Error ("Can not divide by 0");
    }

console.log("Successfully Executed:", a/b);}
catch (error:any){

    console.log("Errorr is :", error.messagae)
}
finally {

    console.log("Successfully executed");
}

}

}


let calo = new calculatoro();

calo.divide(20,5);
//calo.divide(20,0);