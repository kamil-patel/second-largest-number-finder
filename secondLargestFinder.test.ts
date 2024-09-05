import { findSecondLargest } from "./secondLargestFinder";

describe("findSecondLargest", () => {
    it("should return the second largest number in a valid array", () => {
        expect(findSecondLargest([6, 13, 22, 18, 0, 3, 45, 57, 5, 12])).toBe(45);
    });

    it("should handle arrays with duplicate numbers", () => {
        expect(findSecondLargest([5, 5, 5, 5, 5])).toBe(5);
    });

    it("should return -Infinity for an empty array", () => {
        expect(() => findSecondLargest([])).toThrow("Array must contain at least two numbers");
    });

    it("should throw an error for null input", () => {
        expect(() => findSecondLargest(null as any)).toThrow("Invalid input: array is null or undefined");
    });

    it("should throw an error for undefined input", () => {
        expect(() => findSecondLargest(undefined as any)).toThrow("Invalid input: array is null or undefined")
    });

    it("should throw an error for non-array input", () => {
        expect(() => findSecondLargest('not an array' as any)).toThrow("Invalid input: not an array");
    });

    it("should throw an error if the array has fewer than two numbers", () => {
        expect(() => findSecondLargest([1])).toThrow("Array must contain at least two numbers");
    });

    it("should throw an error if the array contains non-number elements", () => {
        expect(() => findSecondLargest([1, 'two', 3] as any)).toThrow("Array contains non-number elements");
    });
});