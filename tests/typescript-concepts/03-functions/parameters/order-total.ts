// A function accepts input, performs work, and can return a result.

// Define a reusable function for checkout calculations.
function calculateOrderTotal(price: number, quantity: number, deliveryFee: number): number {
  // Multiply price and quantity, then add delivery fee.
  return price * quantity + deliveryFee;
}

// Call the function with real order values.
const total: number = calculateOrderTotal(499, 2, 50);

console.log('Order total:', total);
