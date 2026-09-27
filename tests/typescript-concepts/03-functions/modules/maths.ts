/*
 * Learning guide: Exporting multiple utility functions.
 * Learn: named exports can be imported individually by another module.
 * Rules: Keep functions small, type inputs and return values, and use descriptive names.
 */

export function add(a: number, b: number): number {
    return a+b;
}

export function multiplication(c: number, d: number): number {
    return c*d;

}

