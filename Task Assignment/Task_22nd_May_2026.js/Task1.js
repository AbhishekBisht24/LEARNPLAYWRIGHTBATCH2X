//Triangle Classifier::-

let a = 7;
let b = 14;
let c = 21;

if (a === b && b === c) {
  console.log("Equilateral");
}

else if (a === b || b === c || a === c) {
  console.log("Isosceles");
}

else {
  console.log("Scalene");
}