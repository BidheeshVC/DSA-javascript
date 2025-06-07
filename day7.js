// 1. Rotate array left by k positions (2 approaches)

// Using slice and concat
const rotateArraySlice = (arr, k) => {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than array length
    return arr.slice(k).concat(arr.slice(0, k));
};
// Example usage
const arrayToRotate = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArraySlice = rotateArraySlice(arrayToRotate, k);
console.log(`Rotated Array using slice: ${rotatedArraySlice}`);

// Using reverse technique (3 reversals)
const rotateArrayReverse = (arr, k) => {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than array length

    const reverse = (subArr, start, end) => {
        while (start < end) {
            [subArr[start], subArr[end]] = [subArr[end], subArr[start]];
            start++;
            end--;
        }
    };

    reverse(arr, 0, n - 1); // Reverse the entire array
    reverse(arr, 0, k - 1); // Reverse the first k elements
    reverse(arr, k, n - 1); // Reverse the remaining elements

    return arr;
};
// Example usage
const rotatedArrayReverse = rotateArrayReverse([...arrayToRotate], k);
console.log(`Rotated Array using reverse: ${rotatedArrayReverse}`);

// 2. Rotate array right by k positions

// Similar logic but opposite direction
const rotateArrayRight = (arr, k) => {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than array length
    return arr.slice(n - k).concat(arr.slice(0, n - k));
};
// Example usage
const rotatedArrayRight = rotateArrayRight(arrayToRotate, k);
console.log(`Right Rotated Array: ${rotatedArrayRight}`);

// 3. Move all zeros to end

// Maintain relative order of non-zero elements
const moveZerosToEnd = (arr) => {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
};
// Example usage
const arrayWithZeros = [0, 1, 0, 3, 12];
const movedZerosArray = moveZerosToEnd(arrayWithZeros);
console.log(`Array with zeros moved to end: ${movedZerosArray}`);

