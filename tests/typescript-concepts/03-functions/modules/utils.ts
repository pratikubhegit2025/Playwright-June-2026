/*
 * Learning guide: Exporting a reusable function.
 * Learn: named exports allow another file to import this function.
 * Rules: Export only reusable code and give functions an explicit return type when it improves clarity.
 */

export function greet(): void {
    console.log("Hello world");
}
