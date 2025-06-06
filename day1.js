// 1. Reverse a string (3 approaches)

//Using built-in methods: str.split('').reverse().join('')

function reverseString(str) {
    return str.split('').reverse().join('');
}

const stringToReverse = reverseString("hello");
console.log("Reversed string:", stringToReverse); // Expected output: "olleh"

//Using loop: iterate backwards

function reverseStringWithLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const stringToReverseWithLoop = reverseStringWithLoop("hello");
console.log("Reversed string with loop:", stringToReverseWithLoop); // Expected output: "olleh"

//Using recursion: call the function with the substring excluding the first character
function reverseStringWithRecursion(str) {
    if (str === "") {
        return "";
    } else {
        return str[str.length - 1] + reverseStringWithRecursion(str.slice(0, -1));
    }
}
const stringToReverseWithRecursion = reverseStringWithRecursion("hello");
console.log("Reversed string with recursion:", stringToReverseWithRecursion); // Expected output: "olleh"

// 2. Count vowels in a string

// Case-insensitive counting

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const stringToCountVowels = "Hello World";
console.log("Number of vowels:", countVowels(stringToCountVowels)); // Expected output: 3

// 3. Check if two strings are equal (case-insensitive)

function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
const string1 = "Hello";
const string2 = "hello";
console.log("Are strings equal (case-insensitive):", areStringsEqualIgnoreCase(string1, string2)); // Expected output: true

