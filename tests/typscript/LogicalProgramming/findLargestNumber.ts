let largestNumber:number[]=[10,60,90,70,30,100];

let largest =largestNumber[0];    // 0=10,1=60,3=90,4=70,5=30,6=100

//assuming that larget number is at zeroth index
//largest = 10;


for(let i = 1; i<largestNumber.length;i++  ){

    //traversing in array
    // starting from 1st index
    // cause already we have stored the zeroth index as largest 


if(largestNumber[i]> largest)
    //comparing the each value with indexes
    {

    largest = largestNumber[i];
}

}

console.log(largest);
