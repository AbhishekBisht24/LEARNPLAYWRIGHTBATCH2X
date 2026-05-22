# Chapter 10: Loops

## Overview
This chapter covers all types of loops in JavaScript - a fundamental concept for repeating blocks of code. Loops help you execute the same code block multiple times with different values or conditions.

## Topics Covered

### 1. **For Loop** (71_For_loop.js, 72_For_loop.js, 73_For_Loop2.js)
- Basic for loop structure and syntax
- Loop initialization, condition, and increment/decrement
- Repeating code blocks efficiently
- Use cases and practical examples

### 2. **For...of, For...in, and forEach** (75_For_OF_IN_EACH.js)
- **For...of**: Iterates over iterable values (arrays, strings)
- **For...in**: Iterates over object keys/array indices
- **forEach()**: Array method for iterating over each element
- When to use each loop type

### 3. **While Loop** (76_While.js)
- Condition-based looping
- Loop initialization and update patterns
- Break conditions and exit strategies
- Practical examples using while loops

### 4. **Do...While Loop** (77_Do_While.js, 78_Do_While.js)
- Execute code block at least once before checking condition
- Differences between while and do...while
- Use cases for do...while loops
- Real-world scenarios

### 5. **Interview Questions & Practice** (74_IQ.js, 79_IQ.js, 80_IQ.js, 81_IQ.js, 82_IQ.js)
- Coding challenges and interview questions
- Problem-solving with loops
- Edge cases and optimization

## Learning Outcomes
By the end of this chapter, you should be able to:
- ✅ Understand the purpose and structure of different loop types
- ✅ Write and debug for, while, and do...while loops
- ✅ Use for...of, for...in, and forEach appropriately
- ✅ Handle loop conditions, breaks, and continues
- ✅ Solve programming problems using loops
- ✅ Optimize code by choosing the right loop type

## Loop Syntax Reference

### For Loop
```javascript
for (initialization; condition; increment) {
    // code to execute
}
```

### While Loop
```javascript
while (condition) {
    // code to execute
    // update condition
}
```

### Do...While Loop
```javascript
do {
    // code to execute
} while (condition);
```

### For...of Loop
```javascript
for (let value of array) {
    // code to execute
}
```

### For...in Loop
```javascript
for (let key in object) {
    // code to execute
}
```

### forEach Loop
```javascript
array.forEach((element, index) => {
    // code to execute
});
```

## Files List
- `71_For_loop.js` - Introduction to for loops
- `72_For_loop.js` - Additional for loop examples
- `73_For_Loop2.js` - Advanced for loop concepts
- `74_IQ.js` - Interview questions on for loops
- `75_For_OF_IN_EACH.js` - For...of, for...in, and forEach
- `76_While.js` - While loop examples
- `77_Do_While.js` - Do...while loop basics
- `78_Do_While.js` - Additional do...while examples
- `79_IQ.js` - Interview questions part 1
- `80_IQ.js` - Interview questions part 2
- `81_IQ.js` - Interview questions part 3
- `82_IQ.js` - Interview questions part 4

## Tips & Best Practices
1. Always ensure your loop has an exit condition to avoid infinite loops
2. Choose the appropriate loop type for your use case
3. Use `break` to exit a loop prematurely
4. Use `continue` to skip to the next iteration
5. Keep loop logic simple and readable
6. Test edge cases (empty arrays, zero iterations, etc.)

## Next Steps
After completing this chapter, move to **Chapter 11** to learn about:
- Functions and their role in JavaScript
- Advanced control flow patterns
