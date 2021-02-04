// Sort (ordenar)

// ## Exemplo 1: ordenando strings
const names = ['Cristian', 'Alfredo', 'Edson']

// OBS: lembre-se que o metodo sort, altera o array original!!
names.sort()

//console.log(names)



// ## Exemplo 2: ordenando numeros
const scores = [1, 10, 20, 4, 70, 44, 5]

// Se score2 é um numero maior que score1 a funcao retorna um numero positivo, e score2 vem antes de score1.
// Se score1 é um numero maior que score2 a funcao retorna um numero negativo, e score1 vem antes de score2
// se forem do mesmo valor os numeros não são reordenados

// se quiser de forma crescente basta inverter a expressao
scores.sort((score1, score2) => score2 - score1)
console.log(scores)



// ## Exemplo 3: ordenando objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//   if(item1.score > item2.score) {
//     return -1
//   } else if(item2.score > item1.score) {
//     return 1
//   }

//   return 0
// })


// de outra forma
theBigFamily.sort((item1, item2) => item2.score - item1.score)
console.log(theBigFamily)