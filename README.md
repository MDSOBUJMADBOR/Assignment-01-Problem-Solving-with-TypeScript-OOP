# TypeScript Assignment 01

A practical TypeScript assignment covering fundamental to advanced concepts, including type narrowing, generics, object-oriented programming, asynchronous operations, and core type definitions.

---

## Project Structure

```text
├── solutions.ts          # Solutions to 8 practical TypeScript problems
├── type-narrowing.md     # In-depth guide on TypeScript type narrowing
├── type-vs-interface.md  # Detailed comparison between type aliases and interfaces
└── README.md             # Project documentation
```

---

## Solutions Overview (`solutions.ts`)

This file contains solutions for 8 core TypeScript problems:

1. **Problem 01 - `multiplyValue(value, multiplier?)`**
   - Implements optional parameters with a fallback default multiplier (`multiplier ?? 2`).
2. **Problem 02 - `processInput(value)`**
   - Demonstrates type narrowing for a union type (`string | number | boolean`) using `typeof`.
3. **Problem 03 - `formatCoordinate(coordinate)`**
   - Uses a `readonly [number, number, string]` tuple to format location coordinates immutably.
4. **Problem 04 - `concatenateArrays(...arrays)`**
   - Utilizes TypeScript generics (`<T>`) and rest parameters to merge multiple arrays into a single array.
5. **Problem 05 - `getPopularCourses(courses, minStudents)`**
   - Uses a `Course` interface to filter published courses meeting a minimum student enrollment threshold.
6. **Problem 06 - `pluckValues(items, key)`**
   - Uses generic key constraints (`<T, K extends keyof T>`) and indexed access types (`T[K][]`) to extract property values from an array of objects.
7. **Problem 07 - `Employee` & `Manager` Classes**
   - Demonstrates Object-Oriented Programming (OOP), access modifiers (`protected`, `private`), and class inheritance with `super`.
8. **Problem 08 - `validateAgeAsync(age)`**
   - Implements asynchronous promise-based validation that resolves on valid age ($\ge 18$) or rejects with an `Error`.

---

## Documentation Files

### 1. [`type-narrowing.md`](./type-narrowing.md)
Explains the concept of **Type Narrowing** in TypeScript with practical examples using:
- **`typeof`**: Used for narrowing primitive types (`string`, `number`, `boolean`, etc.).
- **`instanceof`**: Used for identifying specific class instances.
- **`in`**: Used for checking property existence inside objects.

### 2. [`type-vs-interface.md`](./type-vs-interface.md)
Compares **Type Aliases** (`type`) and **Interfaces** (`interface`):
- Key differences: declaration merging, syntax, unions, tuples, and inheritance (`extends` vs `&`).
- Practical guidelines on when to choose `interface` (object shapes, OOP, declaration merging) versus `type` (unions, primitives, tuples, utility types).

---

## How to Run

### Run directly with `ts-node`:
```bash
npx ts-node solutions.ts
```

### Or compile and run with `tsc`:
```bash
npx tsc solutions.ts
node solutions.js
```
