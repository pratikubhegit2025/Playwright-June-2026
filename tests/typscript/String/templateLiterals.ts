// Template literal examples

let userName: string = 'Pratik';
let completedTopics: number = 5;
let toolName: string = 'Playwright';

let oldStyleMessage: string = 'Hello ' + userName + ', you completed ' + completedTopics + ' topics in ' + toolName + '.';
console.log('oldStyleMessage:', oldStyleMessage);

let modernMessage: string = `Hello ${userName}, you completed ${completedTopics} topics in ${toolName}.`;
console.log('modernMessage:', modernMessage);

let price: number = 499;
let discount: number = 20;
let finalPrice: number = price - (price * discount) / 100;

console.log(`Original price: ${price}`);
console.log(`Discount: ${discount}%`);
console.log(`Final price: ${finalPrice}`);

let report: string = `
Test Report
-----------
Tester: ${userName}
Tool: ${toolName}
Topics Completed: ${completedTopics}
`;

console.log(report);
