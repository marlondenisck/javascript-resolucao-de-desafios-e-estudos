// Booleans e comparaccoes
// console.log( true, false, 'true', 'false')

// Metodos  podem retornar booleans
const email = "email@email.com"
const includes = email.includes('@') // verifica se a string existe dentro de outra

const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger')


// Operadores de comparacao
const age = 31
const name = 'marlon'

// console.log(age == 28)
// console.log(age != 31) // diferente de
// console.log(age > 30)

console.log(name == 'marlon')
console.log(name > 'Marlon')
console.log(name > 'Belinha')

// strict equal -> Comparações com igualdade estrita
console.log(age == '31') // true -> a string foi convertida em number (ñ confiavel)
console.log(age === 31) // comparacao de valor e o tipo
