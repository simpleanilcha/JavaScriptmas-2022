function validTime(str) {
  const time = str.split(':')
  const hour = parseInt(time[0])
  const min = parseInt(time[1])
  return (hour >= 0 && hour < 24 && min >= 0 && min < 60) ? true : false

  // deconstruct method
  // const [hour, min] = str.split(":").map(time => parseInt(time));
  // return (hour >= 0 && hour <= 23) && (min >= 0 && min <= 59);
}

console.log(validTime('13:58'))
console.log(validTime('25:51'))
console.log(validTime('02:76'))