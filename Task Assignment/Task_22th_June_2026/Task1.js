class Calculator {

    static batchName = "Playwright 2x Batch";

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    subtraction() {
        return this.num1 - this.num2;
    }

    multiplication() {
        return this.num1 * this.num2;
    }

    division() {
        return this.num1 / this.num2;
    }

    modulus() {
        return this.num1 % this.num2;
    }

    static printBatch() {
        console.log("Batch Name:", Calculator.batchName);
    }
}

const calc = new Calculator(20, 5);

Calculator.printBatch();

console.log("Subtraction:", calc.subtraction());
console.log("Multiplication:", calc.multiplication());
console.log("Division:", calc.division());
console.log("Modulus:", calc.modulus());