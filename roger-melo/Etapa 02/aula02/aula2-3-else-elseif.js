// else e else if statements
const password = 'oi123'

if (password.length >= 12) {
  console.log('senha muito forte')
} else if (password.length >= 8) {
  console.log('Essa senha 8 ou mais caracteres')
} else {
  console.log('senha inválida, deve conter 8 ou mais caracteres')
}
