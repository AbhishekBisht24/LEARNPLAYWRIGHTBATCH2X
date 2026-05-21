# Chapter 7: Conditional Statements (If-Else)

Master conditional logic to control program flow and make decisions based on different conditions.

## 📚 Overview

This chapter teaches you how to write programs that make decisions. You'll learn if-else statements, nested conditions, and practical applications for controlling which code executes based on conditions.

## 📂 Files in This Chapter (11 files)

### Basic Conditionals

#### 48_IF_ESLE.js
- **Topic:** Basic if-else structure
- **Learning Focus:** Fundamental if-else syntax
- **Key Concepts:** if statement, else block, condition evaluation
- **Difficulty:** Beginner

#### 49_If_elseif_else.js
- **Topic:** If-elseif-else statements
- **Learning Focus:** Multiple conditions
- **Key Concepts:** else if, multiple conditions, condition order
- **Difficulty:** Beginner

### Real-World Applications

#### 50_REAL_IF_ELSE.js
- **Topic:** Real-world if-else examples
- **Learning Focus:** Practical conditional scenarios
- **Key Concepts:** Real business logic, multiple conditions, nested conditions
- **Difficulty:** Intermediate

#### 51_API_IF_ELSE.js
- **Topic:** API responses with conditional logic
- **Learning Focus:** Handling API response scenarios
- **Key Concepts:** Response validation, status checks, error handling
- **Difficulty:** Intermediate

#### 53_IF_ELSE_real.js
- **Topic:** Practical if-else applications
- **Learning Focus:** More real-world examples
- **Key Concepts:** Decision trees, complex logic, practical patterns
- **Difficulty:** Intermediate

### Common Patterns

#### 56_IQ_EVEN_ODD.js
- **Topic:** Even-odd number checking problem
- **Learning Focus:** Classic conditional problem
- **Key Concepts:** Modulus operator in conditions, pattern recognition
- **Difficulty:** Beginner

#### 57_Grade_Calc.js
- **Topic:** Grade calculation using conditionals
- **Learning Focus:** Range checking and scoring logic
- **Key Concepts:** Multiple ranges, score mapping, nested conditions
- **Difficulty:** Intermediate

#### 58_LEAP_YEAR.js
- **Topic:** Leap year determination logic
- **Learning Focus:** Complex condition logic
- **Key Concepts:** Complex conditions, divisibility checks, edge cases
- **Difficulty:** Intermediate

### Interview & Practice Files

#### 52_IQ_IF_ELSE.js
- **Topic:** Interview questions on conditionals
- **Learning Focus:** Common interview scenarios
- **Key Concepts:** Tricky conditions, edge cases, optimization
- **Difficulty:** Intermediate

#### 54_IQ.js
- **Topic:** Additional interview questions
- **Learning Focus:** More interview practice
- **Key Concepts:** Problem-solving with conditionals
- **Difficulty:** Intermediate

#### 55_IE.js
- **Topic:** IE (Internet Explorer) specific considerations
- **Learning Focus:** Browser compatibility if needed
- **Key Concepts:** Cross-browser considerations
- **Difficulty:** Advanced

## 🎯 Learning Objectives

By the end of this chapter, you should:
- [ ] Write if-else statements correctly
- [ ] Use if-elseif-else for multiple conditions
- [ ] Nest conditions appropriately
- [ ] Avoid common conditional mistakes
- [ ] Solve real-world problems with conditionals
- [ ] Write clean, readable condition logic
- [ ] Handle edge cases
- [ ] Answer conditional interview questions

## 📝 Key Concepts Summary

### If-Else Syntax

```javascript
// Simple if
if (condition) {
    // Execute if condition is true
}

// If-else
if (condition) {
    // Execute if condition is true
} else {
    // Execute if condition is false
}

// If-elseif-else
if (condition1) {
    // Execute if condition1 is true
} else if (condition2) {
    // Execute if condition1 is false and condition2 is true
} else {
    // Execute if both are false
}

// Multiple else-if
if (condition1) {
    // Code A
} else if (condition2) {
    // Code B
} else if (condition3) {
    // Code C
} else {
    // Code D
}
```

### Common Patterns

#### Checking Ranges
```javascript
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}
```

#### Checking Multiple Conditions (AND)
```javascript
if (age >= 18 && hasLicense) {
    canDrive = true;
}
```

#### Checking Multiple Conditions (OR)
```javascript
if (isWeekend || isHoliday) {
    isDayOff = true;
}
```

#### Nested Conditions
```javascript
if (isLoggedIn) {
    if (hasPermission) {
        allowAccess();
    } else {
        denyAccess();
    }
} else {
    redirectToLogin();
}
```

### Common Problems to Solve

#### Even or Odd
```javascript
if (number % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}
```

#### Grade Calculation
```javascript
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 80) {
    grade = 'B';
} else if (marks >= 70) {
    grade = 'C';
} else if (marks >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
```

#### Leap Year
```javascript
if (year % 400 === 0) {
    isLeapYear = true;
} else if (year % 100 === 0) {
    isLeapYear = false;
} else if (year % 4 === 0) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}
```

## 💡 Tips

- **Keep conditions simple:** Long, complex conditions are hard to read
- **Use meaningful variable names:** Makes conditions self-documenting
- **Order conditions efficiently:** Put most likely conditions first
- **Avoid deeply nested conditions:** Use early return or separate functions
- **Test edge cases:** Boundary values often have bugs
- **Consider operator precedence:** && has higher precedence than ||
- **Use descriptive comments:** Explain "why" for complex logic
- **Prefer clarity over cleverness:** Readable code is maintainable code

## 🚀 How to Use These Files

1. **Start with 48_IF_ESLE.js** for basics
2. **Learn multiple conditions** (49)
3. **Study real-world examples** (50, 51, 53)
4. **Practice classic problems** (56, 57, 58)
5. **Challenge with interview questions** (52, 54)
6. **Run and modify** each example
7. **Create your own** conditional problems

## 🔗 Prerequisites

- Completion of Chapters 1-6
- Understanding of operators, especially comparison and logical operators
- Comfort with variables and literals

## 🔗 Next Steps

After completing this chapter:
- Move to **Chapter 8: Switch Statement** - alternative to if-else
- Conditional logic is fundamental; return here as needed
- Use these patterns in all future JavaScript code

## ❓ Common Questions

**Q: What's the difference between if-else and else if?**
A: else if is used for multiple conditions; else is the final fallback.

**Q: Can I use && and || in conditions?**
A: Yes! && means ALL must be true; || means ANY can be true.

**Q: What's the most common bug?**
A: Using = (assignment) instead of == or === (comparison) in conditions.

**Q: How deep should I nest conditions?**
A: Avoid more than 3 levels deep. Use early returns or separate functions.

**Q: How do I check multiple ranges?**
A: Use else if with ranges, or consider a switch statement for discrete values.

**Q: What's a ternary operator?**
A: It's a shorthand: condition ? value_if_true : value_if_false. Use only for simple cases.

---

**Happy Learning!** 🎓

Remember: Conditional logic is the foundation of decision-making in code. Master it well!
