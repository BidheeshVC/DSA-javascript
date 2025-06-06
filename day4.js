// 1. Find maximum and minimum in array (2 approaches)

// Using Math.max/Math.min with spread operator

const numbers = [5, 3, 8, 1, 2];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
console.log(`Max: ${maxNumber}, Min: ${minNumber}`);

// g single loop iteration

const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return { max, min };
}
const result = findMaxMin(numbers);
console.log(`Max: ${result.max}, Min: ${result.min}`);

// 2. Sum of all elements in array

// Using reduce and using loop
const sumUsingReduce = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const sumUsingLoop = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbersToSum = [1, 2, 3, 4, 5];
console.log(`Sum using reduce: ${sumUsingReduce(numbersToSum)}`);
console.log(`Sum using loop: ${sumUsingLoop(numbersToSum)}`);

// 3.Find average of array elements

// Handle edge case of empty array
const findAverage = (arr) => {
  if (arr.length === 0) return 0; // Handle empty array case
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}
const numbersForAverage = [10, 20, 30, 40, 50];
console.log(`Average: ${findAverage(numbersForAverage)}`);

