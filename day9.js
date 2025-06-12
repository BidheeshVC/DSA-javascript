// 1.  Binary Search Implementation (iterative)

// Only works on sorted arrays

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Return index if found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if not found
};
// Example usage
const sortedArrayToSearch = [10, 20, 30, 40, 50];
const targetValueBinary = 30;
const foundIndexBinary = binarySearch(sortedArrayToSearch, targetValueBinary);
console.log(`Found ${targetValueBinary} at index: ${foundIndexBinary}`); // Output: Found 30 at index: 2


// 2. Binary Search (recursive)

// Same logic with recursion
const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) {
        return -1; // Return -1 if not found
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid; // Return index if found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
};
// Example usage for recursive binary search
const foundIndexBinaryRecursive = binarySearchRecursive(sortedArrayToSearch, targetValueBinary);
console.log(`Found ${targetValueBinary} at index (recursive): ${foundIndexBinaryRecursive}`); // Output: Found 30 at index (recursive): 2

// Find first and last occurrence of element

// In sorted array with duplicates
const findFirstAndLastOccurrence = (arr, target) => {
    let first = -1;
    let last = -1;

    // Find first occurrence
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            first = mid; // Update first occurrence
            right = mid - 1; // Search in the left half for first occurrence
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    // Find last occurrence
    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            last = mid; // Update last occurrence
            left = mid + 1; // Search in the right half for last occurrence
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return { first, last }; // Return both occurrences
};
// Example usage for finding first and last occurrence
const sortedArrayWithDuplicates = [10, 20, 20, 30, 30, 40, 50];
const targetValueFirstLast = 20;
const occurrences = findFirstAndLastOccurrence(sortedArrayWithDuplicates, targetValueFirstLast);
console.log(`First occurrence of ${targetValueFirstLast} at index: ${occurrences.first}`); // Output: First occurrence of 20 at index: 1
console.log(`Last occurrence of ${targetValueFirstLast} at index: ${occurrences.last}`); // Output: Last occurrence of 20 at index: 2



