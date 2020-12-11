const ul = document.querySelector('ul')

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickElement = event.target

    clickElement.remove()
  })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
  // forma 1
  // ul.innerHTML += '<li>Novo Item</li>'

  // forma 2
  const li = document.createElement('li')

  li.textContent = 'Novo item'

  // forma 1 add na lista 
  //ultimo filho
  // apeend pode receber um string
  // ul.append(li)
  
  // forma 2 de add na lista
  // primeiro filho
  // ul.prepend(li)

  // forma 3 de add na lista
  ul.appendChild(li)
  // appendChild recebe apenas elemento e nao string
})