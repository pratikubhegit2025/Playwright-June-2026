


/*
 * Learning guide: Reversing a string with a loop.
 * Learn: begin at the last index, move backwards, and build the result one character at a time.
 * Rules: Start from text.length - 1 because indexes are zero-based, and decrement until the index reaches 0.
 */

let text:string ="Hello World";//////>>>>>>>>>>>>>>
//we can not store multiple strings in one variable

//Epected Output: dlroW olleH

let reverse:string= "";//<<<<<<<<<<<<<<<
for(let i=text.length-1;i>=0;i--){// for loop is used to travers
//i=text.length-1 = maximum idex which is starting point for reverse 
//i>=0 = end point
//i-- = decremenatl 
//i=10
reverse = reverse + text[i];
//d
//l[9]
//r[8]

}
console.log(reverse);








