# Chapter 27: TypeScript Interface

This chapter introduces TypeScript interfaces, which define the structure of objects and help enforce consistent shapes in code.

## 📚 Overview

Interfaces are a powerful TypeScript feature used to describe object properties and methods. They improve readability and make code safer.

## 📂 Files

- `203_IF.ts` - Basic interface example
- `204_IF_Part2.ts` - Intermediate interface example
- `205_IF_READONLY.ts` - Example using readonly properties in interfaces
- `206_IF_READOnly.ts` - Another interface example with readonly behavior

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand what an interface is in TypeScript
- define object shapes using interfaces
- use readonly properties in interfaces
- apply interfaces in simple TypeScript programs

## 🧠 Key Concepts

### 1. Interface
An interface describes the structure of an object.

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

## 💡 Notes

- Interfaces are used for type-checking and code clarity.
- They do not generate runtime code.
- Interfaces are especially useful when working with objects in TypeScript.
