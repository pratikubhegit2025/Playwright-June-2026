// try-catch prevents an expected error from stopping the whole program.

// This function simulates reading a required API response value.
function readUserName(response: { userName?: string }): string {
  // Throw a clear error when the required value is missing.
  if (!response.userName) {
    throw new Error('API response does not contain userName.');
  }

  return response.userName;
}

try {
  // This response is missing userName and will throw an error.
  console.log(readUserName({}));
} catch (error) {
  // Print a safe message instead of stopping unexpectedly.
  console.log('Handled error:', (error as Error).message);
}
