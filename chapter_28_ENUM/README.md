# Chapter 28: Enums

This chapter introduces TypeScript enums, which are a way to define a set of named constants that make code easier to read and maintain.

## 📚 Overview

Enums are useful when you want to represent fixed values such as statuses, browser names, environment types, or HTTP methods in a clear and type-safe way.

## 📂 Files

- `213_ENUM.ts` - Basic enum example using string values
- `214_Enum_Fn.ts` - Enum usage with severity and environment examples
- `215_ENUM.ts` - Browser enum with switch-based logic
- `216_API_.ts` - Enum values used in API request examples

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand what an enum is in TypeScript
- define enums with string values
- use enums in conditional logic and function arguments
- improve code readability with named constants

## 🧠 Key Concepts

### 1. Enum
An enum groups related constants under one name.

```ts
enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL"
}
```

### 2. Enum in Logic
Enums are commonly used inside `switch` statements and functions.

```ts
enum Browser {
    Chrome = "chrome",
    Firefox = "firefox"
}
```

## 💡 Notes

- Enums help avoid magic strings and repeated values.
- They are especially helpful in tests, APIs, and configuration settings.
- Enums improve maintainability when you work with shared fixed values.
