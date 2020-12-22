const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const username = event.target.username.value
  const usernameRegex = /^[a-z-A-Z]{6,12}$/
  const isValidUsername = usernameRegex.test(username)
  
  if(isValidUsername) {
    feedback.textContent = 'username válido =)'
    return
  }

  feedback.textContent = 'o username inválido'
})