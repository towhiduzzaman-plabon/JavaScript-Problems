// ==========================================
// 10 JavaScript Problems & Solutions
// ==========================================

// 1. Reverse a String  
const reverseString = str => str.split('').reverse().join('');
console.log("1. Reverse String:", reverseString("hello"));

// 2. Find Largest Number
const findLargest = arr => Math.max(...arr);
console.log("2. Largest Number:", findLargest([3, 7, 2, 9, 5]));

// 3. Check Palindrome
const isPalindrome = str => str === str.split('').reverse().join('');
console.log("3. Is Palindrome:", isPalindrome("madam"));

// 4. Remove Duplicates
const removeDuplicates = arr => [...new Set(arr)];
console.log("4. Unique Array:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 5. Factorial
const factorial = n => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
console.log("5. Factorial of 5:", factorial(5));

// 6. Count Vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log("6. Vowel Count:", countVowels("Hello World"));

// 7. FizzBuzz (1 to 15)
console.log("7. FizzBuzz Results:");
for (let i = 1; i <= 15; i++) {
    let output = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
    console.log(output || i);
}

// 8. Longest Word
const longestWord = (sent) => sent.split(' ').reduce((a, b) => b.length > a.length ? b : a);
console.log("8. Longest Word:", longestWord("I love programming in JavaScript"));

// 9. Title Case
const titleCase = str => str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
console.log("9. Title Case:", titleCase("i am a web developer"));

// 10. Sum of Array
const sumArray = arr => arr.reduce((t, n) => t + n, 0);
console.log("10. Total Sum:", sumArray([10, 20, 30, 40]));

-------
