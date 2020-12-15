// copy event
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
  console.log('texto copiado')
})

// mouse move
const div = document.querySelector('.box')

div.addEventListener('mousemove', (event) => {
  div.textContent = `x ${event.offsetX} | y ${event.offsetY}`
})

// scroll
document.addEventListener('wheel',  event => {
  console.log(event.pageX, event.pageY)
} )