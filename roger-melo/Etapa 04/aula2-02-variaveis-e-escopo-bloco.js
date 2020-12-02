// Variaveis e escopo de bloco

// global
let age = 31 

// if true é automaticamente executado
if(true) {
  // da pra recriar a variavel desde que estejam em escopos diferente
  // aqui no caso age esta dentro do escopo de bloco
  let age = 41

  // var de escopo local 
  let name = 'Roger'

  console.log(`dentro do 1º bloco de código: ${age}, ${name}`)


  if(true) {
    var teste = 'oi'

    console.log(`dentro do 2º bloco de código? ${age}, ${teste}`)
  }
  

}

// name nao acessivel pois é uma variavel de escopo de bloco acima
// test acessivel por var foge do seu ecopo tornando-se global
console.log(`fora do bloco de código: ${age}, ${name}, ${teste}`)