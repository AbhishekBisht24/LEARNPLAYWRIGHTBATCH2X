# Chapter 30: Access Modifiers and Abstraction

This chapter covers access modifiers and abstraction in TypeScript, which help structure object-oriented code more safely and clearly.

## 📚 Overview

Access modifiers such as `public`, `private`, and `protected` control how class members can be used. Abstract classes provide a blueprint for other classes and enforce shared behavior.

## 📂 Files

- `220_PPP.ts` - Example using public, private, and protected members
- `221_PageObjectModel.ts` - Protected members in inheritance
- `222_READONLY.ts` - Readonly properties in classes
- `223_Abstract_Class.ts` - Abstract class and implementation example

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand the difference between `public`, `private`, and `protected`
- use `readonly` properties in classes
- create abstract classes and implement them in child classes
- apply these concepts in object-oriented TypeScript design

## 🧠 Key Concepts

### 1. Access Modifiers
They define the visibility of class members.

```ts
class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;
}
```

### 2. Abstract Class
An abstract class provides a base structure that derived classes must implement.

```ts
abstract class BaseTest {
    abstract setup(): void;
}
```

## 💡 Notes

- `private` members are only accessible inside the class.
- `protected` members are accessible inside the class and its subclasses.
- `public` members are accessible everywhere.
- Abstract classes help define reusable, consistent class behavior.
