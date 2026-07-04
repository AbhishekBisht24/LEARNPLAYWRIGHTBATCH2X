# Chapter 22: Encapsulation

This chapter introduces encapsulation in JavaScript, which is the practice of wrapping data and behavior inside a class while restricting direct access from outside.

## 📚 Overview

Encapsulation helps protect object state and makes code easier to maintain. In this chapter, you will learn:
- how to hide internal data using private fields
- how to expose controlled access through methods
- how to keep class state safe from unintended changes
- how real-world examples use encapsulation for banking, cars, and other objects

## 📂 Files

- `180_Ecap.js` - Simple example of a private field and controlled access
- `181_REAL_EXAMPLE.js` - A practical example showing encapsulation in action
- `182_Ecap_Car.js` - Encapsulation example with a car object
- `183_ECap_Bank.js` - Bank account example demonstrating private balance handling

## 🎯 Learning Objectives

By the end of this chapter, you should be able to:
- understand what encapsulation means in OOP
- use private fields with `#`
- create methods that safely manage object data
- explain why encapsulation improves code quality

## 🧠 Key Concepts

### 1. Private Fields
Private fields are hidden from outside access and can only be used inside the class.

```js
class BankAccount {
    #balance = 0;
}
```

### 2. Controlled Access
Methods provide a safe way to read and update internal values.

```js
getBalance() {
    return this.#balance;
}
```

## 💡 Notes

- Encapsulation is about data protection and clarity.
- Public methods act as the interface for interacting with an object.
- Private members help avoid accidental modifications.
