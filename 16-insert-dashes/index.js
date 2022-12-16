function insertDashes(arr) {
  return arr.split(' ').map(word => word.split('').join('-')).join(' ')

  // another way
  // return arr.split('').join('-').split('- -').join(' ')
}

console.log(insertDashes('aba caba'))   // should be 'a-b-a c-a-b-a'
