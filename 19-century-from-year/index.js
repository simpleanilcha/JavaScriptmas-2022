function centuryFromYear(num) {
  // using Math.floor
  // return (num % 100) > 0 ? (Math.floor(num / 100) + 1) : (num / 100)

  // using Math.ceil
  return Math.ceil(num / 100);
}

console.log(centuryFromYear(1905))  // should return 20
console.log(centuryFromYear(1700))  // should return 17
