// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
  /*
  Make this function return an array that contains 
  between one and ten taco emojis 🌮
  Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
  */
  const randomNumber = Math.floor(Math.random() * 10 + 1)
  // Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  // Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  const newArray = new Array(randomNumber)
  const tacos = newArray.fill('🌮')
  return tacos

  // in short
  // return new Array(Math.floor(Math.random() * 10) + 1).fill('🌮');
}

function putTacosOnTray() {
  return getRandomNumberOfTacos().map(function (taco) {
      return `<div class="taco">${taco}</div>`
  }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
