// An object stores related information using named properties.

// Define the required shape of a customer profile.
interface CustomerProfile {
  name: string;
  email: string;
  isPremiumMember: boolean;
}

// Create one customer object that follows the interface.
const customer: CustomerProfile = {
  name: 'Pratik',
  email: 'pratik@example.com',
  isPremiumMember: true,
};

// Read one property from the object for a welcome message.
console.log('Welcome, ' + customer.name);
