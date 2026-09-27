/*
 * Learning guide: Counting vowels in a string.
 * Learn: traverse each character and compare it against the vowel set.
 * Rules: Normalize case when required and increment a counter when the task asks for a total.
 */

// a e i o u
// count the ovwels

let text12:string = "I love india"; // for loop,while loop,do while loop,for each loop 
let count=0;//0,1,2,3


for(let i = 0; i<text12.length;i++)
{

if ("aeiou".includes(text12[i].toLowerCase()))
{
 count++;

}

}

console.log("Vowel count:", count);





