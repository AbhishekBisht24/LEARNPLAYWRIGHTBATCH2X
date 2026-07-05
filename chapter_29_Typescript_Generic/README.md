# Chapter 29: TypeScript Generics

This chapter introduces TypeScript generics, a feature that allows you to write reusable and type-safe code for different data types.

## 📚 Overview

Generics help you create functions, classes, and components that work with any type while preserving type safety. They are especially useful for reusable data structures and API response handling.

## 📂 Files

- `217_Generic.ts` - Generic function example
- `218_Generic_Class.ts` - Generic class example with storage logic
- `219_Generic_API_RESPONSE.ts` - Generic wrapper for API responses

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand what generics are in TypeScript
- create generic functions
- build generic classes
- apply generics to reusable API response handling

## 🧠 Key Concepts

### 1. Generic Function
A generic function can accept and return different data types while preserving type information.

```ts
function getFirst<T>(items: T[]): T {
    return items[0];
}
```

### 2. Generic Class
A generic class can store different types using a type parameter.

```ts
class DataStore<T> {
    private items: T[] = [];
}
```

## 💡 Notes

- Generics reduce duplication in code.
- They make reusable components safer and easier to maintain.
- Common use cases include collections, APIs, and utility functions.
