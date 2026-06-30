# Chapter 21: Classes and Objects

This chapter introduces object-oriented programming concepts in JavaScript using classes and objects. It covers how to define classes, create objects, use constructors, work with private fields, and understand static members.

## 📚 Overview

JavaScript classes provide a clean way to model real-world entities and organize code. In this chapter, you will learn:
- how to define a class
- how to create objects using the `new` keyword
- how constructors initialize object properties
- how methods work inside a class
- how to use private fields with `#`
- how static properties and methods are shared across the class

## 📂 Files

- `172_Class_Object1.js` - Basic class structure with attributes and methods
- `173_Class_Object2.js` - Class with a constructor and object creation
- `174_Car.js` - Example of a class representing a car with behavior
- `175_REAL_Browser.js` - Real-world example using a test case class
- `176_IQ.js` - Interview-style practice example with browser objects
- `177_Private_Public.js` - Demonstrates public vs private fields
- `178_Statis1.js` - Example of static properties and static methods
- `179_Statis2.js` - Another static member example

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- create classes with properties and methods
- instantiate objects from classes
- understand the purpose of constructors
- use `this` inside class methods
- distinguish between public and private fields
- use static members effectively

## 🧠 Key Concepts

### 1. Class
A class is a blueprint for creating objects.

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}
```

### 2. Object
An object is an instance of a class created using `new`.

```js
const p1 = new Person("Alice");
```

### 3. Constructor
The constructor initializes object properties when the object is created.

### 4. Private Fields
Private fields are declared with `#` and cannot be accessed directly from outside the class.

```js
class Credentials {
    #apiKey;
}
```

### 5. Static Members
Static properties and methods belong to the class itself, not to each instance.

```js
class Student {
    static name = "Playwright2x";
}
```

## 💡 Notes

- Methods are functions defined inside a class.
- `this` refers to the current object instance.
- Static members can be accessed using the class name directly.
- Private fields help protect sensitive data.
