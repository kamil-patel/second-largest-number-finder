/********************************************************
 Purpose: To find the second largest number from a given array.
 Arguments: integerArray (Array of integers)
 Return: The second largest number in the array (Number)
 Example: 
   Input: [6, 13, 22, 18, 0, 3, 45, 57, 5, 12]
   Output: 45
********************************************************/
function findSecondLargest(integerArray) {
    // Initialize largest and secondLargest with negative infinity
    // This allows the function to work with arrays containig negative numbers
    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Iterate through the array, updating largest and secondLargest as needed
    for (let i = 0; i < integerArray.length; i++) {
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
const integerArray = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
console.log("Second Largest Number is:", findSecondLargest(integerArray));
