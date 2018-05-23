// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Refactored Solution
function anagrams(stringA, stringB){
  const strA = sortedArr(stringA)
  const strB = sortedArr(stringB)

  return strA === strB
}

function sortedArr(str){
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

//Solution 1
// function anagrams(stringA, stringB) {
//   let sortedA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
//   let sortedB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
//
//   return sortedA === sortedB
// }


module.exports = anagrams;
