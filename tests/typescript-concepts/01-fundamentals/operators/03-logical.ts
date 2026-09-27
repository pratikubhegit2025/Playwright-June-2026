// Logical operators combine boolean conditions.

// A user must be logged in before placing an order.
const isLoggedIn: boolean = true;

// A product must be in stock before it can be ordered.
const isInStock: boolean = true;

// && means both conditions must be true.
const canPlaceOrder: boolean = isLoggedIn && isInStock;

// || means at least one condition must be true.
const canContactSupport: boolean = isLoggedIn || true;

// ! reverses a boolean value.
const showLoginButton: boolean = !isLoggedIn;

console.log('Customer can place order:', canPlaceOrder);
console.log('Customer can contact support:', canContactSupport);
console.log('Show login button:', showLoginButton);
