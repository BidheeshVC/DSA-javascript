// 1. Count character frequency

// Return object with character counts

function countCharacterFrequency(str) {
    const frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
const stringToCountFrequency = "hello world";
console.log("Character frequency:", countCharacterFrequency(stringToCountFrequency)); // Expected output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// 2. Remove duplicates from string (preserve order)

// Using Set or frequency object

function removeDuplicates(str) {
    const seen = new Set();
    let result = '';
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
const stringToRemoveDuplicates = "hello world";
console.log("String without duplicates:", removeDuplicates(stringToRemoveDuplicates)); // Expected output: "helo wrd"

// 3. Check if string contains only digits

// Multiple validation approaches
function containsOnlyDigits(str) {
    return /^\d+$/.test(str); // Regular expression to check if string contains only digits
}
const stringToCheckDigits = "123456";
console.log("Contains only digits:", containsOnlyDigits(stringToCheckDigits)); // Expected output: true

