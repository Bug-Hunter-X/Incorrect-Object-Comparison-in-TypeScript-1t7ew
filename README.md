# Incorrect Object Comparison in TypeScript

This repository demonstrates a common bug in TypeScript related to object comparison and presents a solution.

## Bug Description
The `compareObjects` function in `bug.ts` aims to compare two objects for equality, but it fails when encountering nested objects.  It uses strict equality (`===`), which doesn't perform deep comparison.

## Solution
The solution in `bugSolution.ts` provides a recursive object comparison function that handles nested objects correctly.

## How to reproduce the bug
1. Clone this repository.
2. Compile and run `bug.ts`. Observe the incorrect comparison result for nested objects.
3. Compile and run `bugSolution.ts`. Observe the correct comparison results.

## Lessons Learned
- Be mindful that strict equality (`===`) is not suitable for comparing complex objects.
- Recursive functions are often necessary for deep comparison of nested objects.
- TypeScript's type system helps catch errors, but it cannot completely prevent logical errors in your code.