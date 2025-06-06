// 1. Check if string is palindrome (3 approaches)

//Using reverse and compare
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
const stringToCheck = "racecar";
console.log("Is palindrome:", isPalindrome(stringToCheck)); // Expected output: true

//Using two pointers

function isPalindromeWithPointers(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
const stringToCheckWithPointers = "racecar";
console.log("Is palindrome with pointers:", isPalindromeWithPointers(stringToCheckWithPointers)); // Expected output: true

//Using recursion
function isPalindromeWithRecursion(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindromeWithRecursion(str.slice(1, -1));
}
const stringToCheckWithRecursion = "racecar";
console.log("Is palindrome with recursion:", isPalindromeWithRecursion(stringToCheckWithRecursion)); // Expected output: true

// 2. Find first non-repeating character

// Use frequency counting
function firstNonRepeatingCharacter(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null; // If no non-repeating character found
}
const stringToFindNonRepeating = "swiss";
console.log("First non-repeating character:", firstNonRepeatingCharacter(stringToFindNonRepeating)); // Expected output: "w"

// 3. Convert string to title case

// Capitalize first letter of each word

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}   
const stringToConvert = "hello world";
console.log("Title case string:", toTitleCase(stringToConvert)); // Expected output: "Hello World"
