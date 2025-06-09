// 1. Linear Search Implementation

// Return index if found, -1 if not found
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
};
// Example usage
const arrayToSearch = [10, 20, 30, 40, 50];
const targetValue = 30;
const foundIndex = linearSearch(arrayToSearch, targetValue);
console.log(`Found ${targetValue} at index: ${foundIndex}`); // Output: Found 30 at index: 2

// Search for multiple occurrences
const linearSearchMultiple = (arr, target) => {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i); // Collect all indices where target is found
        }
    }
    return indices.length > 0 ? indices : -1; // Return indices or -1 if not found
};
// Example usage for multiple occurrences
const arrayWithDuplicates = [10, 20, 30, 20, 50];
const targetValueMultiple = 20;
const foundIndices = linearSearchMultiple(arrayWithDuplicates, targetValueMultiple);
console.log(`Found ${targetValueMultiple} at indices: ${foundIndices}`); // Output: Found 20 at indices: [1, 3]

// 2. Find all indices of element in array

// Return array of all positions
const findAllIndices = (arr, target) => {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i); // Collect all indices where target is found
        }
    }
    return indices.length > 0 ? indices : -1; // Return indices or -1 if not found
};
// Example usage for finding all indices
const arrayToFindIndices = [10, 20, 30, 20, 50];
const targetValueFindAll = 20;
const foundAllIndices = findAllIndices(arrayToFindIndices, targetValueFindAll);
console.log(`Found ${targetValueFindAll} at indices: ${foundAllIndices}`); // Output: Found 20 at indices: [1, 3]


// 3. Search in array of objects

// Find object by property value
const searchInArrayOfObjects = (arr, key, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i]; // Return the object if found
        }
    }
    return null; // Return null if not found
};
// Example usage for searching in array of objects
const arrayOfObjects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const searchKey = 'name';
const searchValue = 'Bob';
const foundObject = searchInArrayOfObjects(arrayOfObjects, searchKey, searchValue);
console.log(`Found object:`, foundObject); // Output: Found object: { id: 2, name: 'Bob' }

