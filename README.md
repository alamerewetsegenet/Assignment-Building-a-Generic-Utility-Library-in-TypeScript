# TypeScript Generic Utilities

This project implements a set of utility functions in TypeScript that demonstrate the use of generics for array and object manipulation. It includes functions for identity, array reversal, object mapping, and array filtering, all designed to showcase the versatility and type safety offered by TypeScript generics.

## Functionality

The utility functions provided in this project are:

- `identity<T>(arg: T): T`: Returns the same value it receives as an argument.
- `reverseArray<T>(arr: T[]): T[]`: Returns a new array with elements in reverse order.
- `mapObject<K, V, U>(obj: Record<K, V>, mapper: (value: V) => U): Record<K, U>`: Maps the values of an object to another type using a mapping function.
- `filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[]`: Filters elements of an array based on a predicate function.

## How to Run

To run the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/alamerewetsegenet/Building-a-Generic-Utility-Library-in-TypeScript.git
git branch -M main
npm install
