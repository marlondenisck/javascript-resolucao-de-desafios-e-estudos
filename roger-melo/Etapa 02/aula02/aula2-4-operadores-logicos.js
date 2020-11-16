// Operadores lógicos 
const pass = 'oisadsad23'

if(pass.length >= 12 && pass.includes('1')) {
  console.log('contem 1 e maior que 12 caracteres')
} else if(pass.length >= 8 || pass.includes('1') && pass.length >= 5) {
  console.log(' maior que 8 caraceres ou contem 1 e maior ou igual a 5 carateres')
} else {
  console.log('senha invalida')
}