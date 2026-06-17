# Chapter 19: Playwright Basics

Welcome to the Playwright testing chapter! This chapter introduces you to Playwright, a modern end-to-end testing framework for web applications.

## 📚 Overview

Playwright is a powerful automation library that supports testing across multiple browsers (Chrome, Firefox, Safari) and provides a simple, expressive API for writing automated tests. This chapter covers the fundamentals of setting up and using Playwright for web application testing.

## 📂 Project Structure

```
chapter_19_Playwright_Basics/
├── tests/
│   ├── example.spec.ts              # Basic example test
│   ├── codegen-tta-cart_validLogin.spec.ts    # Valid login test for TTA Cart
│   └── codegen-tta-cart_invalidLogin.spec.ts  # Invalid login test for TTA Cart
├── playwright.config.ts             # Playwright configuration file
├── package.json                     # NPM dependencies and scripts
├── package-lock.json               # Locked dependency versions
└── playwright-report/              # Test execution reports
```

## 📋 Test Files

### example.spec.ts
- **Topic:** Basic Playwright test example
- **Learning Focus:** Understanding Playwright test structure and basic operations
- **Key Concepts:** Test setup, page navigation, element selection, assertions

### codegen-tta-cart_validLogin.spec.ts
- **Topic:** Valid login testing for The Testing Academy Cart Application
- **Learning Focus:** Real-world login scenario with valid credentials
- **Key Concepts:** Form filling, authentication, page navigation, element interactions

### codegen-tta-cart_invalidLogin.spec.ts
- **Topic:** Invalid login testing for The Testing Academy Cart Application
- **Learning Focus:** Error handling and validation testing
- **Key Concepts:** Negative testing, error message validation, user feedback

## 🎯 Learning Objectives

By the end of this chapter, you should:
- [ ] Understand Playwright architecture and capabilities
- [ ] Know how to set up and configure Playwright
- [ ] Be able to write basic automated tests
- [ ] Understand page navigation and element selection
- [ ] Know how to interact with web elements (click, fill, submit)
- [ ] Be familiar with assertions and test validation
- [ ] Understand running tests across multiple browsers
- [ ] Know how to generate test code using Playwright codegen

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- NPM or Yarn package manager

### Installation

1. **Install Playwright and dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

### Running Tests

1. **Run all tests:**
   ```bash
   npx playwright test
   ```

2. **Run tests in headed mode (with UI):**
   ```bash
   npx playwright test --headed
   ```

3. **Run specific test file:**
   ```bash
   npx playwright test tests/example.spec.ts
   ```

4. **Run tests with UI mode (interactive debugging):**
   ```bash
   npx playwright test --ui
   ```

5. **Generate test report:**
   ```bash
   npx playwright show-report
   ```

## 🔍 Test Execution & Debugging

### Debug Mode
Run tests in debug mode with step-through debugging:
```bash
npx playwright test --debug
```

### Record New Tests (Codegen)
Use Playwright's code generator to automatically create tests:
```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/ttacart/
```

### View Test Results
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## 🔧 Configuration

The `playwright.config.ts` file contains:
- Browser configurations (Chrome, Firefox, Safari)
- Test timeouts and retries
- Reporter settings
- Base URL for tests
- Output directory for reports

## 📝 Key Concepts

### Selectors
Playwright supports multiple selector strategies:
- CSS selectors: `'button.submit'`
- XPath: `'//button[@type="submit"]'`
- Text selectors: `'text=Login'`
- Role selectors: `'role=button'`

### Interactions
Common interactions with page elements:
- `.click()` - Click on element
- `.fill()` - Enter text in input field
- `.press()` - Press keyboard key
- `.submit()` - Submit form
- `.hover()` - Hover over element
- `.waitFor()` - Wait for condition

### Assertions
Validate test results:
- `.toBeVisible()` - Element is visible
- `.toContainText()` - Element contains text
- `.toHaveURL()` - Page has expected URL
- `.toBeEnabled()` - Element is enabled

## 🌐 Testing Application

These tests are written for **The Testing Academy Cart Application**:
- URL: `https://app.thetestingacademy.com/playwright/ttacart/`
- Features being tested:
  - User authentication (login)
  - Shopping cart functionality
  - Product interactions

## 📚 Further Learning Resources

- [Playwright Official Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices for Writing Tests](https://playwright.dev/docs/best-practices)
- [Debugging Tests](https://playwright.dev/docs/debug)

## ✅ Checklist for This Chapter

- [ ] Install Playwright and dependencies
- [ ] Run example test successfully
- [ ] Understand test structure and assertions
- [ ] Run valid login test
- [ ] Run invalid login test
- [ ] Generate a test using codegen
- [ ] Debug a test using --debug mode
- [ ] View and analyze test reports

## 💡 Tips & Best Practices

1. **Always use explicit waits** instead of hard sleeps
2. **Use meaningful test names** that describe what is being tested
3. **Keep tests independent** - each test should be able to run in isolation
4. **Use page objects or fixtures** for better test organization in larger projects
5. **Run tests in parallel** to save time (configured by default)
6. **Use headless mode** for CI/CD pipelines
7. **Generate selectors wisely** - codegen generates selectors, but they may need refinement

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Browser not installed | Run `npx playwright install` |
| Tests timing out | Increase timeout in playwright.config.ts or use `.setDefaultTimeout()` |
| Flaky tests | Add proper waits and use explicit conditions |
| Selector not found | Use Playwright Inspector to identify correct selector |
| Port already in use | Change port in playwright.config.ts or kill process using port |

---

**Happy Testing! 🎭**
