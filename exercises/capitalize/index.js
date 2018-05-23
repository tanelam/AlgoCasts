// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
//
function capitalize(str) {
  const strToArr = str.split(" ")
  const words = []

  for(let i = 0; i < strToArr.length; i++){
    words.push(strToArr[i][0].toUpperCase() + strToArr[i].slice(1))
  }

  return words.join(" ")
}

module.exports = capitalize;

//Solution using a different type of for loop
// function capitalize(str){
//   let words = []
//   let array = str.split(" ")
//
//   for(let word of array){
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//
//   return words.join(" ")
// }
