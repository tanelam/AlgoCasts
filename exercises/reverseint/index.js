// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//My solution:
function reverseInt(n){
 let reversed = []
 let numArr = n.toString().split("")

 for(let i = 0; i < numArr.length; i++){
   reversed = numArr[i] + reversed
 }
 return parseInt(reversed) * Math.sign(n)
}

//Solution 1:
// function reverseInt(n) {
//  let num = n.toString().split("").reverse().join("")
//  return parseInt(num) * Math.sign(n)
// }

module.exports = reverseInt;
