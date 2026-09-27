// This exercise checks a simple email format using string methods.

// Store an email entered on a registration form.
const email: string = 'pratik@example.com';

// Find the position of @ and the final dot.
const atIndex: number = email.indexOf('@');
const dotIndex: number = email.lastIndexOf('.');

// A basic email needs text before @ and a dot after @.
const isValidEmail: boolean = atIndex > 0 && dotIndex > atIndex + 1;

console.log('Email is valid:', isValidEmail);
