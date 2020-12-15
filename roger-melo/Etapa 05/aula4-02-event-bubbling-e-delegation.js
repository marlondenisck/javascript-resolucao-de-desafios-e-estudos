const ul = document.querySelector('ul')
const button  = document.querySelector('button')

button.addEventListener('click',  () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.prepend(li)
})

// const lis = document.querySelectorAll('li')

// lis.forEach(li => {
//   li.addEventListener('click', event => {
//     const clickElement = event.target
//     console.log('clicou na li')
//     event.stopPropagation()
//     clickElement.remove()
//   })
// })

ul.addEventListener('click', (event) => {
  const clickElement = event.target
  if(clickElement.tagName === 'LI') {
    clickElement.remove()
  }
})