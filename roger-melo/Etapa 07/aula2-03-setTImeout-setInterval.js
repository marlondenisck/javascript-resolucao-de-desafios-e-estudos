// Set timeout recebe 2 argumentos
// uma funcao a ser executada e tempo em mililesimo de segundos 
setTimeout(() => {
  console.log('executou somente uma vez em 1 segundo')
}, 1000)


// Set Interval é parecido com o setTimeout, porem a funcao repassada
// é executada sem para a cada tempo expecificado como 2 argumento
// parecido com um relogio
setInterval(() => {
  console.log('1 segundo se passou')
}, 1000);

// para parar o setInterval usa-se o clearInterval() do objeto window
// mas é preciso passar o id do setinterval como argumento
// pode-se obter o id apenas referenciado o setIntetval em uma variavel

let counter = 0

const setIntervalId = setInterval(() => {
  console.log('1 segundo se passou')
  counter ++

  if(counter === 5) {
    clearInterval(setIntervalId)
  }
}, 1000);

// apos 5 passos executou o clearInterval e parou a contagem