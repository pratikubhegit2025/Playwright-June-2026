// function varScop(){
//     if(true){
//         var name = 'Pratik';
//     }
//     console.log(name);
// }   
// varScop();

// function letScop(){
//     if(true){
//         let role = 'pratik UBHE';
//         console.log(role);
        
        
//     }
// }
// letScop();

// function test1(){


//     if(true){
//         var testtt = 'Pratik test 1';
//         console.log(testtt);
//         let name2 = 'Pratik test 2';
//         console.log(name2);
   
//     }
    
// }
// test1();

// var a=30;
// console.log(a);
// var a=40;
// console.log(a);

// let b=30;
// console.log(b);
// let b=40;
//     console.log(b);


/*
 * Learning guide: Variable scope with var, let, and const.
 * Learn: var is function-scoped; let and const are block-scoped.
 * Rules: Prefer const by default, use let only when reassignment is needed, and avoid var in new code.
 */

function test2(){
    if(true){
        var testtt = 'Pratik test 1';
        
        var name2 = 'Pratik test 2';
     
        const name3 = 'Pratik test 3';
        console.log(name3);
    }       
    console.log(testtt);
     console.log(name2);
}
test2();

