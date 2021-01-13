// Diferente dos outros metodos, map e filter.
// O metodo reduce serve para reduzir um array em algum outro tipo de dado 
// Por exemplo outro array menor, um numero, uma string, boolean...

// Exemplo 1
const numbers = [1, 2, 3]
const sumNumbers = numbers.reduce((accumulator, item) => accumulator + item, 0)
// O Zero no final é opcional, ele é o acumulador inicial

console.log(sumNumbers)

/*
┌  Acumulador ┬  Item ┐
│   0         │   1   │+
│   1         │   2   │+
│   3         │   3   │+
└─────────────┴───────┘
│Final 6      │=
└─────────────┘
*/


// Exemplo 2
const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((acc, item) => {
  if(item.name === 'Roger Melo') {
    acc += item.score
  }
  return acc
}, 0)

console.log(rogerScore)

/*
┌  Acumulador ┬  Item ┐
│   0         │  43   │+
│  43         │ 180   │+
└─────────────┴───────┘
│Final 180    │=
└─────────────┘
*/