# TypeScript Concepts

This folder contains small, independent TypeScript lessons. Each file focuses on one idea and can be executed from the project root with:

```powershell
npx tsx ..\tests\typescript-concepts\<topic-folder>\<file-name>.ts
```

## Learning order

1. `01-fundamentals` - variables, types, scope, hoisting, and operators.
2. `02-control-flow` - decisions and loops.
3. `03-functions` - functions, callbacks, and modules.
4. `04-collections` - arrays, strings, and objects.
5. `05-oop` - constructors, encapsulation, abstraction, inheritance, and polymorphism.
6. `06-error-handling` - try, catch, throw, and finally.
7. `07-logical-programming` - small logic exercises for practice.

## Study rules

- Run one file at a time so its output is easy to understand.
- Read the learning guide at the top before changing the code.
- Change one value, predict the output, then run the file again.
- Keep type annotations accurate; avoid `any` unless the lesson is specifically about it.
- These are standalone lessons, not Playwright test files. They are excluded from the framework type-check so duplicate example names do not affect automation tests.
