// JSON is a text format used by APIs to exchange structured data.

// This string represents an API response body.
const responseBody: string = '{"id": 101, "name": "Pratik", "active": true}';

// Define the expected shape of the parsed response.
interface UserResponse {
  id: number;
  name: string;
  active: boolean;
}

// JSON.parse converts JSON text into a TypeScript object.
const user: UserResponse = JSON.parse(responseBody) as UserResponse;

console.log('User name:', user.name);
console.log('Account is active:', user.active);
