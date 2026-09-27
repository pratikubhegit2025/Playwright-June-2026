// API tests validate status codes and response data.

// Store a sample response received from an API.
const response = {
  status: 200,
  body: { message: 'User created successfully' },
};

// Compare the actual status with the expected successful status.
const isSuccessful: boolean = response.status === 200;

// Check that the response contains the expected business message.
const hasExpectedMessage: boolean = response.body.message.includes('created');

console.log('Status validation passed:', isSuccessful);
console.log('Message validation passed:', hasExpectedMessage);
