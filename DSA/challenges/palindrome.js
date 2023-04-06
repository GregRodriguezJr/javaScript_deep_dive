// A palindrome is a word, phrase, or sequence of characters 
// that reads the same backward as forward. 
// Write a function that takes a string as an argument and 
// returns true if the string is a palindrome, and false otherwise.

// function that takes in a string as an argument
const isPalindrome = (str) => {

    // use reverse to store reverse string in a variable
    const str2 = str.split("").reverse().join("");

    // return true if string is palindrome, else false
    if(str === str2) {
        return true;
    } else {
        return false;
    }
}

// invoke function and test
console.log(isPalindrome("apple"));
console.log(isPalindrome("bob"));