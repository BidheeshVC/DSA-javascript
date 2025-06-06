// 1. Remove duplicates from array (2 approaches)

// Using Set (doesn't preserve order of duplicates)

const removeDuplicatesSet = (arr) => [...new Set(arr)];
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersSet = removeDuplicatesSet(numbersWithDuplicates);
console.log(`Unique numbers using Set: ${uniqueNumbersSet}`);


// Using filter with indexOf (preserves order of first occurrence)

const removeDuplicatesFilter = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);
const numbersWithDuplicates2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersFilter = removeDuplicatesFilter(numbersWithDuplicates2);
console.log(`Unique numbers using filter: ${uniqueNumbersFilter}`);

// 2. Find intersection of two arrays

// Return common elements

const findIntersection = (arr1, arr2) => {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = findIntersection(array1, array2);
console.log(`Intersection: ${intersection}`);

// 3.Merge two arrays and remove duplicates

// Combine approaches from above
const mergeAndRemoveDuplicates = (arr1, arr2) => {
    const combined = [...arr1, ...arr2];
    return [...new Set(combined)];
}
const array3 = [1, 2, 3];
const array4 = [3, 4, 5, 6];
const mergedUnique = mergeAndRemoveDuplicates(array3, array4);
console.log(`Merged Unique: ${mergedUnique}`);

