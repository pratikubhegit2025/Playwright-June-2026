// A ternary operator is a short form of an if-else statement.

// Store a test result received from execution.
const testPassed: boolean = true;

// If testPassed is true, return Passed; otherwise return Failed.
const testStatus: string = testPassed ? 'Passed' : 'Failed';

// Store a user's age for an eligibility example.
const age: number = 20;

// Select the correct text based on the comparison result.
const votingMessage: string = age >= 18 ? 'Eligible to vote' : 'Not eligible to vote';

console.log('Test status:', testStatus);
console.log(votingMessage);
