const player = document.getElementById("player")

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  player.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`)
  
  const btns = document.querySelectorAll('button')
  btns.forEach(btn => {
    btn.classList.remove('playing');
  })
    
  this.event.target.classList.add('playing');
  
  player.style.display = 'none'
}