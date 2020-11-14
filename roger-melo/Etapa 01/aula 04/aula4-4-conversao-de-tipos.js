// Conversao de tipos
let score = '100'

// alterou o tipo para number
score = Number(score)

// console.log(score + 1)
// console.log(typeof score)
// console.log(typeof 'uma palavra')

const crazyConvertion = Number('Maçã') // NaN
const convertedNumber = String(97) // String
const booleanConvertion = Boolean(10) // true
console.log(typeof booleanConvertion, booleanConvertion) 

/* 
  Valores falsy:
    - false
    - 0 
    - "", '', ``
    - null
    - undefined
    - NaN


  Valores truthy
    - Qualquer valor diferente de falsy acima.

*/