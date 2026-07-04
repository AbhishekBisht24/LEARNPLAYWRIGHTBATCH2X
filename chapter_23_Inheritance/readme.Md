# Chapter 23: Inheritance

This chapter introduces inheritance, one of the core pillars of object-oriented programming in JavaScript.

## 📚 Overview

Inheritance allows a child class to reuse the behavior and properties of a parent class. It helps reduce duplication and makes code more structured.

## 📂 Files

- `184_Single_Inheritance.js` - Basic single inheritance example
- `185_SI_Example.js` - Simple inheritance example using a base class
- `186_Single_Inheritance_Con.js` - Constructor-based inheritance example
- `187_IQ.js` - Inheritance interview-style practice questions
- `188_IQ2.js` - Additional interview questions
- `189_REAL_PageObject_Model.js` - Real-world inheritance example using a page object model approach
- `190_Multiple_Inheritance.js` - Demonstrates multiple inheritance concepts
- `191_Multi_Level_Inheritance.js` - Example of multi-level inheritance
- `192_Hierarchial_Inheritance.js` - Example of hierarchical inheritance

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand how inheritance works in JavaScript
- create child classes using `extends`
- reuse parent class behavior in derived classes
- distinguish between different inheritance patterns

## 🧠 Key Concepts

### 1. Parent Class
The parent class contains shared properties and methods.

```js
class BasePage {
    open() {
        console.log("Opening the page");
    }
}
```

### 2. Child Class
A child class inherits from the parent class using `extends`.

```js
class LoginPage extends BasePage {}
```

## 💡 Notes

- Inheritance supports code reuse.
- Child classes can inherit methods from the parent class.
- In JavaScript, inheritance is implemented through prototypes.
