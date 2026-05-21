// Maximum between two numbers using ternary operator

let a = 10;
let b = 20;

let maxTwo = (a > b) ? a : b;

console.log("Maximum between two numbers is:", maxTwo);

// Maximum between three numbers using ternary operator

let x = 15;
let y = 25;
let z = 18;

let maxThree = (x > y)
    ? ((x > z) ? x : z)
    : ((y > z) ? y : z);

console.log("Maximum between three numbers is:", maxThree);

// Expression output

let a = 5;

console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);