// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Refactored Solution with helper method
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

// Solution using character map, iteration and a helper method
// function anagrams(stringA, stringB) {
//
// let regStrA = stringA.replace(/[^\w]/g, "").toLowerCase()
// let regStrB = stringB.replace(/[^\w]/g, "").toLowerCase()
//
// let charMapA = buildCharMap(regStrA)
// let charMapB = buildCharMap(regStrB)
//
//   if(regStrA.length !== regStrB.length){
//     return false
//   }
//
//   for(let key in charMapA){
//     if(charMapA[key] !== charMapB[key]){
//       return false
//     }
//   }
//   return true
// }
//
// function buildCharMap(str){
//   let obj = {}
//
//   for(let char of str){
//     if(obj[char]){
//       obj[char]++
//     }else{
//       obj[char] = 1
//     }
//   }
//   return obj
// }



module.exports = anagrams;
