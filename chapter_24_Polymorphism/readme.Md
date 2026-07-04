# Chapter 24: Polymorphism

This chapter introduces polymorphism, which allows objects of different classes to be used through the same interface while behaving differently.

## 📚 Overview

Polymorphism is a key concept in object-oriented programming. In this chapter, you will focus on method overriding and how a child class can provide its own implementation of a parent method.

## 📂 Files

- `192_Method_Overriding.js` - Example of overriding a method in a derived class

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand what polymorphism means in OOP
- explain method overriding
- see how child classes can change inherited behavior
- connect this concept with real-world class design

## 🧠 Key Concepts

### 1. Method Overriding
A child class can redefine a method that already exists in the parent class.

```js
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}
```

## 💡 Notes

- Polymorphism makes code more flexible and extensible.
- Method overriding is one of the most common ways to implement polymorphic behavior.
- The same method name can behave differently depending on the object type.
