# Second Largest Number Finder

This JavaScript function finds the second largest number in a given array of integers.

## Function: `findSecondLargest`

### Purpose
To find the second largest number from a given array of integers.

### Arguments
- `integerArray` (Array of integers)

### Return
The second largest number in the array (Number)

### Example
```javascript
Input: [6, 13, 22, 18, 0, 3, 45, 57, 5, 12]
Output: 45
```

## Usage

```javascript
const integerArray = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
console.log("Second Largest Number is:", findSecondLargest(integerArray));
```

## How it works

1. Initialize `largest` and `secondLargest` with negative infinity to handle arrays with negative numbers.
2. Iterate through the array, updating `largest` and `secondLargest` as needed.
3. If a new largest number is found, the old largest becomes the second largest.
4. If a number is found that's between the current largest and second largest, it becomes the new second largest.
5. Return the second largest number after iterating through the entire array.