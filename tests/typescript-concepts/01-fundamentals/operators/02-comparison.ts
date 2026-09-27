// Comparison operators compare two values and return true or false.

// Store the expected status code from a successful API request.
const expectedStatusCode: number = 200;

// Store the actual status code received from the API.
const actualStatusCode: number = 200;

// === checks both value and type; use it for reliable comparisons.
const isRequestSuccessful: boolean = actualStatusCode === expectedStatusCode;

// > checks whether a response time exceeds the allowed limit.
const responseTimeMs: number = 850;
const isSlowResponse: boolean = responseTimeMs > 1000;

console.log('API request passed:', isRequestSuccessful);
console.log('Response is slow:', isSlowResponse);
