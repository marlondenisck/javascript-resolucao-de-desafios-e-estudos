// Arrays
let heroes = ['Captain America', 'Iron Man', 'Doctor Strange']
// heroes[1] =  'Spider-Man'
const ages = [21, 25, 39, 40, 25]

const randomArray = ['Parker', 'Diana', 19, 18]


// Métodos de arrays
const joinHeros = heroes.join('-')
const IndexOf25 = ages.indexOf('25')
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])

const pushToHeroes = heroes.push('Hulk') // mutation! alterou o array original
const popHeroes =  heroes.pop() // mutation tambem

console.log(popHeroes)