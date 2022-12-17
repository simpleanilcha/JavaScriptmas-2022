
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, [1, [3, 4], 2], 76], 89, 98, [87, 56, 90], 
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
  return arr.flat(Infinity)

  // using reduce method
  // return arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), [])

  // using manually
  // const flatteneddArray = []
  // const flattenArr = (arr) => arr.forEach(item => {
  //     if (Array.isArray(item)) flattenArr(item)
  //     else flatteneddArray.push(item)
  // })
  // flattenArr(arr)
  // return flatteneddArray
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
