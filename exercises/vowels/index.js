// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Solution using regex and match method

function vowels(str){
  let matches = str.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

//Solution 2
// function vowels(str){
//   let word = str.toLowerCase()
//   let counter = 0
//   const checker = ['a', 'e', 'i', 'o', 'u']
//
//   for(let char of word){
//     if(char.includes(checker)){
//       counter++
//     }
//   }
//   return counter
// }




//Solution 1
// function vowels(str) {
//   let vowelCount = 0
//   let word = str.toLowerCase()
//
//  for(let char of word){
//    if(char.includes("a")){
//      vowelCount++
//    }else if(char.includes("e")){
//      vowelCount++
//    }else if(char.includes("i")){
//      vowelCount++
//    }else if(char.includes("o")){
//      vowelCount++
//    }else if(char.includes("u")){
//      vowelCount++
//    }else{
//      false
//    }
//  }
//  return vowelCount
// }

module.exports = vowels;
