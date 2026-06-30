// ✅ String Reverse | Palindrome Program
// Given a string , Reverse it and print true if they are same.
// Madam is palindrome, pramod is not

let s = "Madam";

let reverse = "";

let s1 = s.toLowerCase();

for (let i = s1.length - 1; i >= 0; i--) {
    reverse = reverse + s1.charAt(i);
}

if (reverse === s1) {
    console.log(`${s} is palindrome`);
} else {
    console.log(`${s} is not a palindrome`);
}