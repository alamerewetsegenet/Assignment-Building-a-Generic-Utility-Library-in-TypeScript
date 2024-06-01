/**
 * Identity function that returns the input value.
 * @param value - The input value of type T.
 * @returns The same value of type T.
 */
export function identity<T>(value: T): T {
    return value;
}

/**
 * Reverses the elements of an array.
 * @param array - The input array of type T[].
 * @returns A new array with the elements in reverse order.
 */
export function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

/**
 * Maps the values of an object using a mapping function.
 * @param obj - The input object with keys of type K and values of type V.
 * @param fn - The mapping function that converts values from type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
export function mapObject<K extends string | number | symbol, V, U>(
    obj: Record<K, V>,
    fn: (value: V) => U
): Record<K, U> {
    const result: Record<K, U> = {} as Record<K, U>;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = fn(obj[key]);
        }
    }
    return result;
}

/**
 * Filters elements of an array based on a predicate function.
 * @param array - The input array of type T[].
 * @param predicate - The predicate function that tests each element.
 * @returns A new array with elements that satisfy the predicate.
 */
export function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
}

// Sample Test Cases
console.log(identity<number>(1)); // Output: 1
console.log(identity<string>("hello")); // Output: hello

console.log(reverseArray<number>([1, 2, 3])); // Output: [3, 2, 1]

console.log(mapObject({ a: 1, b: 2 }, x => x.toString())); // Output: { a: "1", b: "2" }

console.log(filterArray<number>([1, 2, 3, 4], x => x % 2 === 0)); // Output: [2, 4]
