// ✅ Java Anagrams

let word1 = "Eat";
let word2 = "Tea";

let a = word1.toLowerCase().split('').sort().join('');
let b = word2.toLowerCase().split('').sort().join('');

if (a === b) {
    console.log(word1 + " & " + word2 + " -> " + "Anagram");
} else {
    console.log(word1 + " & " + word2 + " -> " + "Not Anagram");
}