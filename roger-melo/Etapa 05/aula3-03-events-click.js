const button  = document.querySelector('button')

button.addEventListener('click',  () => {
  console.log('click')
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickElement = event.target

    clickElement.style.textDecoration = 'line-through'
  })
})