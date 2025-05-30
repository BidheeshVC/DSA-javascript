# 45-Day MERN Interview Preparation Plan - Detailed Study Guide

## Overview
- **Target**: MERN Trainee/Junior Developer Position
- **Focus**: Essential problem-solving skills with complexity awareness
- **Daily Time**: 45 minutes - 1 hour
- **Problems Per Day**: 3-5 (increasing gradually)

---

## **Week 1-2: Essential Problem-Solving Patterns (Days 1-14)**

### **Day 1-3: String Manipulation**

**Concept Review (10 minutes each day):**
- String immutability in JavaScript
- Common string methods: charAt(), substring(), slice(), indexOf()
- ASCII values and character codes

**Problems to Solve:**

**Day 1:**
1. **Reverse a string (3 approaches)**
   - Using built-in methods: `str.split('').reverse().join('')`
   - Using loop: iterate backwards
   - Using recursion
   - **Complexity**: O(n) time, O(n) space
   
2. **Count vowels in a string**
   - Case-insensitive counting
   - **Complexity**: O(n) time, O(1) space

3. **Check if two strings are equal (case-insensitive)**
   - **Complexity**: O(n) time, O(1) space

**Day 2:**
1. **Check if string is palindrome (3 approaches)**
   - Using reverse and compare
   - Using two pointers
   - Using recursion
   - **Complexity**: O(n) time, O(1) space (two-pointer approach)

2. **Find first non-repeating character**
   - Use frequency counting
   - **Complexity**: O(n) time, O(k) space (k = unique characters)

3. **Convert string to title case**
   - Capitalize first letter of each word
   - **Complexity**: O(n) time, O(n) space

**Day 3:**
1. **Count character frequency**
   - Return object with character counts
   - **Complexity**: O(n) time, O(k) space

2. **Remove duplicates from string (preserve order)**
   - Using Set or frequency object
   - **Complexity**: O(n) time, O(k) space

3. **Check if string contains only digits**
   - Multiple validation approaches
   - **Complexity**: O(n) time, O(1) space

---

### **Day 4-7: Array Fundamentals**

**Concept Review (10 minutes each day):**
- Array methods: push, pop, shift, unshift, slice, splice
- Difference between mutating and non-mutating methods
- Array indexing and negative indices

**Day 4:**
1. **Find maximum and minimum in array (2 approaches)**
   - Using Math.max/Math.min with spread operator
   - Using single loop iteration
   - **Complexity**: O(n) time, O(1) space

2. **Sum of all elements in array**
   - Using reduce and using loop
   - **Complexity**: O(n) time, O(1) space

3. **Find average of array elements**
   - Handle edge case of empty array
   - **Complexity**: O(n) time, O(1) space

**Day 5:**
1. **Two Sum Problem (3 approaches)**
   - Brute force: nested loops
   - Hash map approach (optimal)
   - Two-pointer (if array is sorted)
   - **Complexity**: O(n) time, O(n) space (hash map)

2. **Find pair with given sum**
   - Similar to two sum but return boolean
   - **Complexity**: O(n) time, O(n) space

3. **Count even and odd numbers**
   - Return object with counts
   - **Complexity**: O(n) time, O(1) space

**Day 6:**
1. **Remove duplicates from array (2 approaches)**
   - Using Set (doesn't preserve order of duplicates)
   - Using filter with indexOf
   - **Complexity**: O(n) time, O(n) space

2. **Find intersection of two arrays**
   - Return common elements
   - **Complexity**: O(n+m) time, O(min(n,m)) space

3. **Merge two arrays and remove duplicates**
   - Combine approaches from above
   - **Complexity**: O(n+m) time, O(n+m) space

**Day 7:**
1. **Rotate array left by k positions (2 approaches)**
   - Using slice and concat
   - Using reverse technique (3 reversals)
   - **Complexity**: O(n) time, O(1) space (reverse method)

2. **Rotate array right by k positions**
   - Similar logic but opposite direction
   - **Complexity**: O(n) time, O(1) space

3. **Move all zeros to end**
   - Maintain relative order of non-zero elements
   - **Complexity**: O(n) time, O(1) space

---

### **Day 8-10: Basic Algorithms**

**Concept Review (10 minutes each day):**
- Linear vs Binary search concepts
- When to use each algorithm
- Sorted vs unsorted data structures

**Day 8:**
1. **Linear Search Implementation**
   - Return index if found, -1 if not found
   - Search for multiple occurrences
   - **Complexity**: O(n) time, O(1) space

2. **Find all indices of element in array**
   - Return array of all positions
   - **Complexity**: O(n) time, O(k) space (k = occurrences)

3. **Search in array of objects**
   - Find object by property value
   - **Complexity**: O(n) time, O(1) space

**Day 9:**
1. **Binary Search Implementation (iterative)**
   - Only works on sorted arrays
   - **Complexity**: O(log n) time, O(1) space

2. **Binary Search (recursive)**
   - Same logic with recursion
   - **Complexity**: O(log n) time, O(log n) space

3. **Find first and last occurrence of element**
   - In sorted array with duplicates
   - **Complexity**: O(log n) time, O(1) space

**Day 10:**
1. **Bubble Sort Implementation**
   - Understand the algorithm, optimize with early termination
   - **Complexity**: O(n²) time, O(1) space

2. **Find second largest element (3 approaches)**
   - Sort and pick second last
   - Single pass with two variables
   - Using Set to remove duplicates
   - **Complexity**: O(n) time, O(1) space (single pass)

3. **Check if array is sorted**
   - Both ascending and descending
   - **Complexity**: O(n) time, O(1) space

---

### **Day 11-14: Number Problems**

**Concept Review (10 minutes each day):**
- Mathematical operations in JavaScript
- Recursion vs iteration trade-offs
- Handling edge cases (negative numbers, zero)

**Day 11:**
1. **Check if number is prime (2 approaches)**
   - Basic check up to n-1
   - Optimized check up to √n
   - **Complexity**: O(√n) time, O(1) space

2. **Find all prime numbers up to n (Sieve method)**
   - Sieve of Eratosthenes
   - **Complexity**: O(n log log n) time, O(n) space

3. **Check if number is perfect square**
   - Using Math.sqrt and validation
   - **Complexity**: O(1) time, O(1) space

**Day 12:**
1. **Factorial (iterative and recursive)**
   - Handle edge cases (0! = 1, negative numbers)
   - **Complexity**: O(n) time, O(1) space (iterative), O(n) space (recursive)

2. **Calculate power (a^b) without Math.pow**
   - Both iterative and recursive
   - **Complexity**: O(b) time, O(1) space (iterative)

3. **Find GCD/HCF of two numbers**
   - Euclidean algorithm
   - **Complexity**: O(log(min(a,b))) time, O(1) space

**Day 13:**
1. **Fibonacci sequence (3 approaches)**
   - Recursive (inefficient)
   - Iterative
   - Memoization (dynamic programming intro)
   - **Complexity**: O(n) time, O(1) space (iterative)

2. **Check if number is Fibonacci number**
   - Generate sequence up to given number
   - **Complexity**: O(log n) time, O(1) space

3. **Find nth Fibonacci number efficiently**
   - Using iterative approach
   - **Complexity**: O(n) time, O(1) space

**Day 14:**
1. **Reverse a number**
   - Handle negative numbers
   - **Complexity**: O(log n) time, O(1) space

2. **Check if number is palindrome**
   - Without converting to string
   - **Complexity**: O(log n) time, O(1) space

3. **Count digits in a number**
   - Both with and without Math.log
   - **Complexity**: O(log n) time, O(1) space

---

## **Week 3-4: Intermediate Logic Building (Days 15-28)**

### **Day 15-18: Pattern Problems**

**Concept Review (10 minutes each day):**
- Nested loops for 2D patterns
- Space and newline management
- Mathematical relationships in patterns

**Day 15:**
1. **Right triangle star pattern**
   ```
   *
   **
   ***
   ****
   ```
   **Complexity**: O(n²) time, O(1) space

2. **Inverted right triangle**
   ```
   ****
   ***
   **
   *
   ```
   **Complexity**: O(n²) time, O(1) space

3. **Number triangle**
   ```
   1
   12
   123
   1234
   ```
   **Complexity**: O(n²) time, O(1) space

**Day 16:**
1. **Pyramid pattern**
   ```
      *
     ***
    *****
   *******
   ```
   **Complexity**: O(n²) time, O(1) space

2. **Diamond pattern**
   - Combination of pyramid and inverted pyramid
   **Complexity**: O(n²) time, O(1) space

3. **Floyd's triangle**
   ```
   1
   2 3
   4 5 6
   7 8 9 10
   ```
   **Complexity**: O(n²) time, O(1) space

**Day 17:**
1. **Matrix traversal - row wise**
   - Print all elements row by row
   **Complexity**: O(n×m) time, O(1) space

2. **Matrix traversal - column wise**
   - Print all elements column by column
   **Complexity**: O(n×m) time, O(1) space

3. **Print matrix diagonals**
   - Both main and anti-diagonal
   **Complexity**: O(n) time, O(1) space

**Day 18:**
1. **Spiral matrix traversal (basic)**
   - Traverse 2D array in spiral order
   **Complexity**: O(n×m) time, O(1) space

2. **Transpose of matrix**
   - Convert rows to columns
   **Complexity**: O(n×m) time, O(n×m) space

3. **Sum of each row and column**
   - Return arrays with sums
   **Complexity**: O(n×m) time, O(n+m) space

---

### **Day 19-22: Object and Array Manipulation**

**Concept Review (10 minutes each day):**
- Object destructuring and manipulation
- Array of objects operations
- Functional programming concepts

**Day 19:**
1. **Group objects by property**
   ```javascript
   // Group people by age
   const people = [{name: 'John', age: 25}, {name: 'Jane', age: 25}]
   // Result: {25: [{name: 'John', age: 25}, {name: 'Jane', age: 25}]}
   ```
   **Complexity**: O(n) time, O(n) space

2. **Count objects by property value**
   - Count how many objects have each property value
   **Complexity**: O(n) time, O(k) space

3. **Filter objects by multiple criteria**
   - Advanced filtering with AND/OR conditions
   **Complexity**: O(n) time, O(n) space

**Day 20:**
1. **Merge two sorted arrays**
   - Without using built-in sort
   **Complexity**: O(n+m) time, O(n+m) space

2. **Find intersection of multiple arrays**
   - Common elements across all arrays
   **Complexity**: O(n×m) time, O(n) space

3. **Union of two arrays**
   - All unique elements from both arrays
   **Complexity**: O(n+m) time, O(n+m) space

**Day 21:**
1. **Find intersection of arrays (optimal)**
   - Using hash map for better performance
   **Complexity**: O(n+m) time, O(min(n,m)) space

2. **Count occurrences of each element**
   - Return frequency object
   **Complexity**: O(n) time, O(k) space

3. **Find elements that appear only once**
   - In array with duplicates
   **Complexity**: O(n) time, O(n) space

**Day 22:**
1. **Sort array of objects by property**
   - Both ascending and descending
   **Complexity**: O(n log n) time, O(1) space

2. **Find duplicate objects in array**
   - Based on specific property
   **Complexity**: O(n) time, O(n) space

3. **Remove objects with duplicate property values**
   - Keep first occurrence
   **Complexity**: O(n) time, O(n) space

---

### **Day 23-25: String Advanced**

**Concept Review (10 minutes each day):**
- Advanced string algorithms
- Pattern matching concepts
- Stack-based string problems

**Day 23:**
1. **Check if two strings are anagrams (3 approaches)**
   - Sort both strings and compare
   - Character frequency comparison
   - Character count using array
   **Complexity**: O(n log n) time (sorting), O(n) time (frequency)

2. **Find all anagrams of a string in array**
   - Group anagrams together
   **Complexity**: O(n×m log m) time where m is average string length

3. **Check if string is rotation of another**
   - Using concatenation trick
   **Complexity**: O(n) time, O(n) space

**Day 24:**
1. **Longest common prefix**
   - Find common prefix among array of strings
   **Complexity**: O(n×m) time where n is number of strings

2. **Longest common substring**
   - Between two strings
   **Complexity**: O(n×m) time, O(n×m) space

3. **Count palindromic substrings**
   - All substrings that are palindromes
   **Complexity**: O(n²) time, O(1) space

**Day 25:**
1. **Valid parentheses (basic stack concept)**
   - Check if brackets are balanced
   **Complexity**: O(n) time, O(n) space

2. **String compression**
   - "aabcccccaaa" → "a2b1c5a3"
   **Complexity**: O(n) time, O(n) space

3. **Remove consecutive duplicate characters**
   - "aabbcc" → "abc"
   **Complexity**: O(n) time, O(n) space

---

### **Day 26-28: Logical Puzzles**

**Concept Review (10 minutes each day):**
- Mathematical problem solving
- Edge case identification
- Optimization techniques

**Day 26:**
1. **FizzBuzz (classic version)**
   - Print 1 to 100 with Fizz, Buzz, FizzBuzz rules
   **Complexity**: O(n) time, O(1) space

2. **FizzBuzz variations**
   - Custom rules (Fizz=3, Buzz=5, Jazz=7)
   - Return array instead of printing
   **Complexity**: O(n) time, O(n) space

3. **Number to words conversion**
   - Convert digits to word representation
   **Complexity**: O(log n) time, O(log n) space

**Day 27:**
1. **Missing number in array (3 approaches)**
   - Array contains 1 to n with one missing
   - Sum formula, XOR method, hash set
   **Complexity**: O(n) time, O(1) space (sum formula)

2. **Find missing numbers in range**
   - Multiple numbers missing from 1 to n
   **Complexity**: O(n) time, O(k) space

3. **First missing positive integer**
   - In unsorted array
   **Complexity**: O(n) time, O(1) space

**Day 28:**
1. **Find duplicate number (3 approaches)**
   - In array of size n+1 with numbers 1 to n
   - Hash set, sorting, Floyd's cycle detection
   **Complexity**: O(n) time, O(1) space (Floyd's)

2. **Array chunk problem**
   - Split array into chunks of size k
   **Complexity**: O(n) time, O(n) space

3. **Flatten nested array**
   - Convert [[1,2],[3,4]] to [1,2,3,4]
   **Complexity**: O(n) time, O(d) space (d = depth)

---

## **Week 5-6: Interview-Specific Skills (Days 29-42)**

### **Day 29-32: Function and Closure Problems**

**Concept Review (10 minutes each day):**
- Higher-order functions
- Closures and lexical scoping
- Function composition patterns

**Day 29:**
1. **Implement map from scratch**
   ```javascript
   Array.prototype.myMap = function(callback) {
     // Implementation
   }
   ```
   **Complexity**: O(n) time, O(n) space

2. **Implement filter from scratch**
   - Same pattern as map
   **Complexity**: O(n) time, O(k) space (k = filtered elements)

3. **Implement reduce from scratch**
   - Handle initial value edge cases
   **Complexity**: O(n) time, O(1) space

**Day 30:**
1. **Function composition**
   - Compose multiple functions into one
   **Complexity**: O(1) time, O(1) space

2. **Pipe function implementation**
   - Left-to-right function composition
   **Complexity**: O(1) time, O(1) space

3. **Partial application**
   - Fix some arguments of a function
   **Complexity**: O(1) time, O(1) space

**Day 31:**
1. **Currying implementation (2 approaches)**
   - Transform f(a,b,c) to f(a)(b)(c)
   - Manual and generic implementations
   **Complexity**: O(1) time, O(1) space

2. **Function memoization**
   - Cache function results
   **Complexity**: O(1) average time, O(n) space

3. **Once function**
   - Function that executes only once
   **Complexity**: O(1) time, O(1) space

**Day 32:**
1. **Debounce implementation**
   - Delay function execution
   **Complexity**: O(1) time, O(1) space

2. **Throttle implementation**
   - Limit function execution frequency
   **Complexity**: O(1) time, O(1) space

3. **Cache with expiration**
   - Memoization with time-based expiry
   **Complexity**: O(1) average time, O(n) space

---

### **Day 33-36: DOM Manipulation Logic**

**Concept Review (10 minutes each day):**
- Event handling patterns
- Form validation techniques
- State management in vanilla JS

**Day 33:**
1. **Form validation logic**
   - Email, password, phone number validation
   **Complexity**: O(n) time, O(1) space

2. **Real-time validation feedback**
   - Validate as user types
   **Complexity**: O(n) time, O(1) space

3. **Custom validation rules**
   - Composable validation functions
   **Complexity**: O(k) time, O(1) space (k = rules)

**Day 34:**
1. **Event delegation pattern**
   - Handle events on parent for dynamic children
   **Complexity**: O(1) time, O(1) space

2. **Drag and drop logic**
   - Basic implementation without libraries
   **Complexity**: O(1) time, O(1) space

3. **Keyboard navigation**
   - Handle arrow keys, enter, escape
   **Complexity**: O(1) time, O(1) space

**Day 35:**
1. **Simple calculator logic**
   - Handle basic operations and edge cases
   **Complexity**: O(1) time, O(1) space

2. **Calculator with memory functions**
   - Add memory store/recall/clear
   **Complexity**: O(1) time, O(1) space

3. **Expression evaluator**
   - Parse and evaluate simple expressions
   **Complexity**: O(n) time, O(n) space

**Day 36:**
1. **To-do list operations**
   - Add, remove, toggle, filter todos
   **Complexity**: O(n) time for operations, O(n) space

2. **Undo/redo functionality**
   - Implement command pattern
   **Complexity**: O(1) time, O(n) space

3. **Local storage integration**
   - Persist and retrieve data
   **Complexity**: O(n) time, O(n) space

---

### **Day 37-39: API and Async Patterns**

**Concept Review (10 minutes each day):**
- Promise patterns and error handling
- Async/await best practices
- API response processing

**Day 37:**
1. **Promise-based problem solving**
   - Chain promises for sequential operations
   **Complexity**: O(1) time, O(1) space

2. **Promise.all implementation**
   - Wait for all promises to resolve
   **Complexity**: O(1) time, O(n) space

3. **Promise retry mechanism**
   - Retry failed promises with exponential backoff
   **Complexity**: O(1) time, O(1) space

**Day 38:**
1. **Async/await error handling**
   - Try-catch patterns with async functions
   **Complexity**: O(1) time, O(1) space

2. **Concurrent API calls**
   - Make multiple API calls efficiently
   **Complexity**: O(1) time, O(n) space

3. **API response caching**
   - Cache responses to avoid repeated calls
   **Complexity**: O(1) average time, O(n) space

**Day 39:**
1. **Data fetching and processing**
   - Transform API responses
   **Complexity**: O(n) time, O(n) space

2. **Pagination logic**
   - Handle paginated API responses
   **Complexity**: O(1) time, O(n) space

3. **Search with debouncing**
   - Combine search logic with debounce
   **Complexity**: O(n) time, O(n) space

---

### **Day 40-42: Mini Project Logic**

**Concept Review (10 minutes each day):**
- State management patterns
- Data flow in applications
- Component communication

**Day 40:**
1. **Shopping cart calculations**
   - Add/remove items, calculate totals, apply discounts
   **Complexity**: O(n) time, O(n) space

2. **Inventory management**
   - Track stock, handle out-of-stock scenarios
   **Complexity**: O(1) time, O(n) space

3. **Price calculation with tax**
   - Different tax rates, rounding issues
   **Complexity**: O(n) time, O(1) space

**Day 41:**
1. **User authentication logic**
   - Login/logout state management
   **Complexity**: O(1) time, O(1) space

2. **Session management**
   - Handle session expiry, refresh tokens
   **Complexity**: O(1) time, O(1) space

3. **Role-based access control**
   - Check permissions for different user roles
   **Complexity**: O(k) time, O(1) space (k = permissions)

**Day 42:**
1. **CRUD operations logic**
   - Create, Read, Update, Delete operations
   **Complexity**: O(1) for create/update/delete, O(n) for read operations

2. **Search and filter implementations**
   - Multi-criteria search with filters
   **Complexity**: O(n) time, O(k) space

3. **Sorting and pagination**
   - Client-side data management
   **Complexity**: O(n log n) time for sort, O(1) space

---

## **Week 7: Final Preparation (Days 43-45)**

### **Day 43-45: Mock Interviews and Review**

**Daily Schedule:**
- **Morning (30 minutes)**: Review 2-3 previously solved problems
- **Afternoon (30 minutes)**: Timed problem solving (20 minutes per problem)
- **Evening (30 minutes)**: Mock interview simulation

**Day 43: String and Array Review**
1. Pick 3 random string problems from days 1-3
2. Pick 3 random array problems from days 4-7
3. Solve within time limits and explain solutions

**Day 44: Algorithm and Logic Review**
1. Pick 2 search/sort problems from days 8-10
2. Pick 2 number problems from days 11-14
3. Pick 2 pattern problems from days 15-18
4. Focus on explaining complexity

**Day 45: Function and Interview Skills**
1. Pick 2 function problems from days 29-32
2. Pick 1 async problem from days 37-39
3. Mock interview: solve new problem while explaining approach

---

## **Complexity Analysis Quick Reference**

### **Time Complexity:**
- **O(1)**: Constant - accessing array element, hash map lookup
- **O(log n)**: Logarithmic - binary search, balanced tree operations
- **O(n)**: Linear - single loop through array, linear search
- **O(n log n)**: Log-linear - efficient sorting (merge sort, quick sort)
- **O(n²)**: Quadratic - nested loops, bubble sort

### **Space Complexity:**
- **O(1)**: Constant extra space
- **O(n)**: Space proportional to input size
- **O(log n)**: Recursive call stack space

### **Common Patterns:**
- **Two Pointers**: O(n) time, O(1) space
- **Hash Map**: O(n) time, O(n) space
- **Sliding Window**: O(n) time, O(1) space
- **Recursion**: Often O(n) space due to call stack

---

## **Study Tips**

### **Daily Routine:**
1. **Read concept (10 min)**: Understand the theory
2. **Solve problems (30-40 min)**: Code solutions
3. **Analyze complexity (5-10 min)**: Think about time/space
4. **Review and optimize (5 min)**: Can you do better?

### **Problem-Solving Approach:**
1. **Understand**: Read problem carefully, ask questions
2. **Plan**: Think of approach before coding
3. **Code**: Write clean, readable solution
4. **Test**: Check with examples and edge cases
5. **Optimize**: Consider better approaches
6. **Explain**: Practice explaining your solution

### **Interview Preparation:**
- Practice explaining solutions out loud
- Always discuss complexity
- Handle edge cases (empty arrays, null values)
- Write clean, well-commented code
- Ask clarifying questions

### **Red Flags to Avoid:**
- Jumping straight to code without planning
- Not considering edge cases
- Ignoring time/space complexity
- Writing messy, uncommented code
- Not testing solutions with examples