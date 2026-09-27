/*
 * Learning guide: Checking whether a string is a palindrome.
 * Learn: reverse the text and compare it with the original text.
 * Rules: Normalize case and spaces first if the input may contain them; use === for the final comparison.
 */

//MADAM


let text1="madam";
let reverse1="";
for(let i=text1.length-1;i>=0;i--){
reverse1=reverse1+text1[i];
}
if(text1===reverse1){
    console.log("STRING IS PALINDROME")
}
else
{
      console.log("STRING IS NOT PALINDROME")
}
