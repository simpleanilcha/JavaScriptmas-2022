function candies(children, candy) {
  const candyForEach = Math.floor(candy / children)
  const totalCandy = candyForEach * children
  return totalCandy

  // another way
  // return candy - candy % children
  // OR
  // return ~~(candy / children) * children
}

console.log(candies(3, 10))   // should be return 9
console.log(candies(30, 10))
