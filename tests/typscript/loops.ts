// loops

//1. while loop
//2 do while loop
//3 for loop

// if want to print 1 to 10 

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

// statements and conditions are repeated using loops
console.log("*****while loop*****");
// while loop
let i = 1; // initialization
while (i <= 20) { // max limit
    console.log(i); // condition
    i++; // increment operator
}

console.log("*****do while loop*****");

// do while loop
let j = 1; // initialization
do {
    console.log(j); // condition
    j++; // increment operator
} while (j <= 20); // max limit

 console.log("*****for loop*****");
// for loop
for (let k = 1; k <= 10; k++) { // initialization, max limit, increment operator
    console.log(k); // condition
}
 console.log("*****for loop- DECREMENTAL*****");

for (let l = 5; l >= 1; l--) {  // initialization, max limit, decrement operator
    console.log(l); // condition
}



console.log("*****for loop- boolean*****");





let isLoggedIn: boolean = true; // initialization
for (let m = 1; isLoggedIn; m++) { // condition
    console.log(m);

    if (m === 10) { // max limit
        isLoggedIn = false; // condition
    }}


