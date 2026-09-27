// A Promise represents a result that will be available later.

// Simulate an asynchronous API request that finishes after one second.
const apiRequest: Promise<string> = new Promise((resolve) => {
  setTimeout(() => resolve('API response received'), 1000);
});

// Read the Promise result when it becomes available.
apiRequest.then((message) => {
  console.log(message);
});
