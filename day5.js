//1. Two Sum Problem (3 approaches)

// 1 - Using brute force approach
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
// Example usage
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Brute Force: ${twoSumBruteForce(nums1, target1)}`);


// 2 - Using hash map for optimized approach
const twoSumHashMap = (nums, target) => {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
        return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
    }
// Example usage
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Hash Map: ${twoSumHashMap(nums2, target2)}`);

// 3.Two-pointer (if array is sorted)
const twoSumTwoPointer = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}
// Example usage
const nums3 = [1, 2, 3, 4, 6];
const target3 = 5;
console.log(`Two Pointer: ${twoSumTwoPointer(nums3, target3)}`);

// 2. Find pair with given sum


// 1- Similar to two sum but return boolean

const hasPairWithSum = (arr, target) => {
    const numSet = new Set();
    for (const num of arr) {
        const complement = target - num;
        if (numSet.has(complement)) {
            return true; // Pair found
        }
        numSet.add(num);
    }
    return false; // No pair found
}
// Example usage
const arr1 = [10, 15, 3, 7];
const target4 = 17;
console.log(`Has Pair with Sum: ${hasPairWithSum(arr1, target4)}`);

// 3. Count even and odd numbers

// 1-Return object with counts
const countEvenOdd = (arr) => {
    const counts = { even: 0, odd: 0 };
    for (const num of arr) {
        if (num % 2 === 0) {
            counts.even++;
        } else {
            counts.odd++;
        }
    }
    return counts;
}
// Example usage
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(`Even and Odd Counts:`, countEvenOdd(arr2));

