/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
  let firstChar = word.slice(0,1).toUpperCase()
  let remainingChar = word.slice(1)
  return firstChar+remainingChar;

  // in short 
  // return word.slice(0,1).toUpperCase() + word.slice(1)
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
  const words = str.split(' ')
  const titleCaseWord = words.map(word => capitalizeWord(word))
  return titleCaseWord.join(' ')

  // in short
  // return str.split(' ').map(word => capitalizeWord(word)).join(' ')
}

// Test your functions
console.log(capitalizeWord("scrimba"));
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("everything, everywhere, all at once"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));