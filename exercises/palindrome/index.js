// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//My solution

function palindrome(str) {
  let newStr = ""

  for(let i=0; i < str.length; i++){
    newStr = str[i] + newStr
  }

  return newStr === str ? true : false

}

//Solution 1

// function palindrome(str){
//
//   let reversed = str.split("").reverse().join("")
//
//   return reversed === str
// }

//Solution 2 uses the helper method "every"

// function palindrome(str){
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }





module.exports = palindrome;
