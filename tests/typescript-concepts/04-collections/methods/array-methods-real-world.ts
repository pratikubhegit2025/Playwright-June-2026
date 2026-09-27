// Array methods help us process lists such as test results.

// Store a list of test results from a test run.
const testResults: string[] = ['Passed', 'Failed', 'Passed', 'Skipped'];

// filter creates a new list containing only failed tests.
const failedTests: string[] = testResults.filter((result) => result === 'Failed');

// includes checks whether at least one test failed.
const hasFailures: boolean = testResults.includes('Failed');

// join converts the list into readable text for a report.
const reportText: string = testResults.join(', ');

console.log('Failed tests:', failedTests);
console.log('Run contains failures:', hasFailures);
console.log('Report:', reportText);
