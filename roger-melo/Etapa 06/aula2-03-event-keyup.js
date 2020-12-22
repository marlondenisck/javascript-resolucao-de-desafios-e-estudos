const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-z-A-Z]{6,12}$/.test(username)

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const isValidUsername = testUsername(event.target.username.value)
  
  if(isValidUsername) {
    feedback.textContent = 'username válido =)'
    return
  }

  feedback.textContent = 'o username inválido'
})


form.username.addEventListener('keyup', event => {
  const isValidUsername = testUsername(event.target.value)

  if(isValidUsername) {
    event.target.setAttribute('class', 'success')
    return
  }

  event.target.setAttribute('class', 'error')
})