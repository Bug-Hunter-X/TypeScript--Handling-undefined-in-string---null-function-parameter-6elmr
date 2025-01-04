# TypeScript: Handling undefined in string | null function parameter

This repository demonstrates a common TypeScript error when dealing with optional parameters that can be either a string or null.  The issue arises when attempting to pass `undefined` to a function that specifically accepts `string | null`.

The `bug.ts` file shows the problem: the function works correctly with `null`, but throws a type error when given `undefined`.

The solution, shown in `bugSolution.ts`, addresses this by using a type guard or optional chaining.  This effectively tells TypeScript that you've checked for the possibility of `undefined` and know how to handle it.