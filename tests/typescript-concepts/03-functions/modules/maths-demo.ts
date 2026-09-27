/*
 * Learning guide: Using multiple named imports.
 * Learn: this file imports arithmetic functions and executes them.
 * Rules: Import related values together and use the new module filename in the import path.
 */

import { add, multiplication } from "./maths";


console.log(multiplication(2,2));
console.log(add(10,20));

