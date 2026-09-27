// async and await make asynchronous code easier to read.

// Return a Promise after simulating a database lookup.
function getUserName(): Promise<string> {
  return Promise.resolve('Pratik');
}

// Mark the function async so await can be used inside it.
async function printUserName(): Promise<void> {
  // Wait for the Promise result before moving to the next line.
  const userName: string = await getUserName();

  console.log('Logged-in user:', userName);
}

// Run the asynchronous function.
void printUserName();
