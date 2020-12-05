// O que é escopo?
// - Pode ser definido como a visibilidade de uma variável
// Existem 3 escopos: - lexico, funcão e de bloco.

// Escopo de função
function myFunc1() {
  const age = 3
  console.log(age)
}

// observe o console.log temos 2 variaveis iguais porem estao em escopo diferentes!
function myFunc2() {
  const age = 5 
  console.log(age)
}

myFunc1()
myFunc2()

// nao e possivel acessar a let fora do escopo de funcao, ela somente
// pode ser acessível dentro da function
// console.log(age)



// Escopo de bloco
if(true) {
  let dragon = 'Balerion'
}

// dragon e uma variavel de bloco e nao pode ser acessível
// console.log(dragon)

// Observe que a palavra chave var neste caso vaza de seu escopo
if(true) {
  var dog = 'Barney'
}

console.log(dog)

// let e const tem regras diferente de escopo em relacao a var



// Escopo léxico
const funcaoExterna = () => {
  const book = 'Sapiens'

  const funcaoInterna = () => {
    // se nao existisse essa variavel seria buscada no escopo acima
    const book = 'Os testamentos'

    const funcaoInterna2 = () => {
    // a variavel é buscada no escopo acima 
    console.log(book.toUpperCase())
    }

    funcaoInterna2()
  }

  funcaoInterna()
}


funcaoExterna() // retorna OS TESTAMENTOS
