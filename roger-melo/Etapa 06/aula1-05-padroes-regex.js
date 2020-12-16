const form = document.querySelector('.signup-form')


form.addEventListener('submit', (event) => {
  event.preventDefault()

  console.log(event.target.username.value)
})

const username = 'marlondck'
const pattern = /^[a-z]{6,}$/

// test metodo de regex
// retorna boolean
// const isAMatch = pattern.test(username)

// if(isAMatch) {
//   console.log('o teste da regex passou')
// } else {
//   console.log('o teste da regex passou')
// }

// search metodo de string
// retorna um numero representando o index
const result = username.search(pattern)
console.log(result)