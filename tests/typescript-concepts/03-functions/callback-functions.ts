/*
 * Learning guide: Callback functions.
 * Learn: a callback is a function passed to another function and invoked later.
 * Rules: Give callbacks a specific function type instead of Function, and call the outer function to see the result.
 */

function greet(name: string): void {
    console.log("Hello "+name);
}

function passName(callback: (name: string) => void): void {
  callback("Pratik");
}

passName(greet);
