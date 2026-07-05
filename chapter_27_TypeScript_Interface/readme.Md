# Chapter 27: TypeScript Interface

This chapter introduces TypeScript interfaces, which define the structure of objects and help enforce consistent shapes in your code.

## 📚 Overview

Interfaces are a core TypeScript feature used to describe the shape of objects, methods, and function contracts. They improve readability, make code easier to maintain, and help catch errors during development.

## 📂 Files

- `203_IF.ts` - Basic interface example for defining object types
- `204_IF_Part2.ts` - Additional interface examples with more structured objects
- `205_IF_READONLY.ts` - Demonstrates `readonly` properties in interfaces
- `206_IF_READOnly.ts` - More practice with readonly and optional interface fields
- `207_Interface.ts` - Interface usage with practical object examples
- `208_Hooks.ts` - Interface-based examples related to reusable logic
- `209_Bug REPORT.ts` - Practice file for debugging TypeScript issues
- `210_TestConfig.ts` - Interface example for test configuration objects
- `211_REAL_EXAMPLE.ts` - Real-world interface usage example
- `212_Class_Interface.ts` - Shows how classes implement interfaces

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand what an interface is in TypeScript
- define object shapes using interfaces
- use `readonly` and optional properties effectively
- implement interfaces in classes
- apply interfaces to real-world TypeScript examples

## 🧠 Key Concepts

### 1. Interface
An interface describes the structure of an object without creating runtime code.

```ts
interface User {
    name: string;
    age: number;
}
```

### 2. Readonly Properties
Readonly properties cannot be reassigned after initialization.

```ts
interface User {
    readonly id: number;
    name: string;
}
```

### 3. Class Implementation
A class can implement an interface to guarantee that it provides the required members.

```ts
interface Runnable {
    run(): void;
}

class TestCase implements Runnable {
    run(): void {
        console.log("Running test");
    }
}
```

## 💡 Notes

- Interfaces are used for type-checking and code clarity.
- They help define contracts between different parts of your application.
- Interfaces are especially useful when working with objects and classes in TypeScript.
