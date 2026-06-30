# Chapter 20: Export / Import

This chapter introduces JavaScript module syntax using `export` and `import`.
You will learn how to share code between files, use named exports, default exports, and alias imports.

## 📚 Overview

Modern JavaScript uses modules to organize code into reusable files.
This chapter demonstrates:
- named exports with `export`
- default exports with `export default`
- importing values using `import { ... } from ...`
- importing default exports using `import name from ...`
- aliasing imported symbols with `as`

## 📂 Project Structure

```
chapter_20_Export_Import/
├── 01_EXPORT_IMPORT/
│   ├── 169_EXPORT_IMPORT.js
│   ├── 170_Utils.js
│   ├── 171_Logger.js
│   └── ExplainDefault.md
├── logger.js
├── testutils.js
└── utils.js
```

## 📄 Files

### `utils.js`
- exports named values:
  - `BASE_URL`
  - `formatTestName(name)`

### `testutils.js`
- exports named values:
  - `BASE_URL`
  - `formatUpperCaseString(text)`

### `logger.js`
- exports a default function:
  - `log(message)`
- also exports a named function:
  - `log2(message)`

### `01_EXPORT_IMPORT/169_EXPORT_IMPORT.js`
- imports named exports from `../testutils.js`

### `01_EXPORT_IMPORT/170_Utils.js`
- imports named exports from both `../utils.js` and `../testutils.js`
- demonstrates aliasing with `as` when exports have the same name

### `01_EXPORT_IMPORT/171_Logger.js`
- imports the default export from `../logger.js`

### `01_EXPORT_IMPORT/ExplainDefault.md`
- explains the difference between named exports and default exports

## 🚀 What you will learn

- When to use named exports vs default exports
- How to import one or more values from a module
- How to rename bindings during import
- How to use a module with both default and named exports
- Basic module organization for reusable code

## 🧪 Example patterns

### Named exports

```js
// utils.js
export let BASE_URL = "https://api.staging.com";

export function formatTestName(name) {
  return "TC_" + name.toUpperCase();
}
```

```js
// 170_Utils.js
import { BASE_URL as utilBaseUrl, formatTestName } from "../utils.js";
import { BASE_URL as testBaseUrl, formatUpperCaseString } from "../testutils.js";
```

### Default export

```js
// logger.js
export default function log(message) {
  console.log("[LOG] - default " + message);
}

export function log2(message) {
  console.log("[LOGS] " + message);
}
```

```js
// 171_Logger.js
import log from '../logger.js';

log("starting the test cases");
```

## 💡 Notes

- Default exports are imported without braces.
- Named exports require braces and must match the exported name unless aliased.
- A file can have multiple named exports, but only one default export.
- Use aliases when two modules export the same symbol name.
