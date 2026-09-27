// if-else chooses one path based on a condition.

// Store the result returned by a login API.
const loginSucceeded: boolean = false;

// Run this block only when login succeeded.
if (loginSucceeded) {
  console.log('Open the customer dashboard.');
} else {
  // Run this block when login did not succeed.
  console.log('Show an invalid username or password message.');
}
