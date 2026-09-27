// Arithmetic operators perform mathematical calculations.

// Store a product price in rupees.
const productPrice: number = 1200;

// Store the quantity selected by a customer.
const quantity: number = 3;

// Multiply price by quantity to calculate the cart subtotal.
const subtotal: number = productPrice * quantity;

// Store a discount amount.
const discount: number = 200;

// Subtract the discount from the subtotal.
const amountAfterDiscount: number = subtotal - discount;

// Calculate 18 percent GST using division and multiplication.
const gst: number = (amountAfterDiscount / 100) * 18;

// Add GST to get the final payable amount.
const finalAmount: number = amountAfterDiscount + gst;

console.log('Subtotal:', subtotal);
console.log('Final amount:', finalAmount);
