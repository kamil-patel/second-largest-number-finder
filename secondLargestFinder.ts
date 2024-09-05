/********************************************************
 Purpose: To find the second largest number from a given array.
 Arguments: integerArray (Array of numbers)
 Return: The second largest number in the array (Number)
 Example: 
   Input: [6, 13, 22, 18, 0, 3, 45, 57, 5, 12]
   Output: 45
********************************************************/
export function findSecondLargest(integerArray:number[]): number {
    // Check for null or undefined input
    if (integerArray == null) {
        throw new Error('Invalid input: array is null or undefined');
    }

    // Check if input is an array
    if (!Array.isArray(integerArray)) {
        throw new Error('Invalid input: not an array');
    }

    // Check if array has at least two elements
    if (integerArray.length < 2) {
        throw new Error('Array must contain at least two numbers');
    }

    // Check if all elements are numbers
    if (!integerArray.every(element => typeof element === 'number')) {
        throw new Error('Array contains non-number elements');
    }

    // Handle the case where all elements are the same
    const uniqueNumbers = Array.from(new Set(integerArray));
    if (uniqueNumbers.length === 1) {
        throw new Error('Array elements are all the same');
    }

    // Initialize largest and secondLargest with negative infinity
    // This allows the function to work with arrays containig negative numbers
    let largest: number = -Infinity;
    let secondLargest: number = -Infinity;

    // Iterate through the array, updating largest and secondLargest as needed
    for (let i: number = 0; i < integerArray.length; i++) {
        if (integerArray[i] > largest) {
            // If we find a new largest, the old largest becomes secondLargest
            secondLargest = largest;
            largest = integerArray[i];
        } else if (integerArray[i] > secondLargest && integerArray[i] < largest) {
            // Update secondLargest if we find a number between largest and secondLargest
            secondLargest = integerArray[i];
        }
    }

    return secondLargest;
}

// Example usage
const integerArray: number[] = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
console.log("Second Largest Number is:", findSecondLargest(integerArray));