function countVowelConsonant(str) {
  const letters = str.toLowerCase().split('')
  return letters.reduce((total, letter) => 'aeiou'.includes(letter) ? total+1 : total+2, 0)
  
  // another option
  // const numArr = str.split("").map(chr => 'aeiou'.includes(chr) ? 1 : 2)
  // return numArr.reduce((total, num) => total + num);

  // in short
  // return str.split('').reduce((a, c) => a + ('aeiou'.includes(c) ? 1 : 2), 0)
}

console.log(countVowelConsonant('abcde'))   // should be 8
