/*
 * Learning guide: Importing a named function from another module.
 * Learn: export makes a value available; import uses that value in another file.
 * Rules: Keep the relative import path correct and run this file to see the imported greeting.
 */

import { greet } from "./utils";
greet();
