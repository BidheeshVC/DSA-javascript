// Problem: Write a function that takes a string and returns the string reversed.
// Example: reverseString("hello") ➝ "olleh"

function reverseString(str) {
    console.log("String to reverse:", str);

    // Step 1: Split the string into an array of characters
    const splitString = str.split('');
    console.log("Split string:", splitString);

    // Step 2: Reverse the array of characters
    const reversedArray = splitString.reverse();
    console.log("Reversed array:", reversedArray);

    // Step 3: Join the reversed array back into a string
    const joinedString = reversedArray.join('');
    console.log("Joined (reversed) string:", joinedString);

    // Return the final reversed string
    return joinedString;

    // we can also use the built-in method
    // return str.split('').reverse().join('');
}

// Example input string
const stringToReverse = "malayalam";

// Example usage: reverse the string
const result = reverseString(stringToReverse); // Expected output: "olleh"
console.log("Reversed result:", result);

// Palindrome check: if the reversed string is equal to the original
if (stringToReverse === result) {
    console.log("The given string is a palindrome.");
} else {
    console.log("The given string is not a palindrome.");
}
