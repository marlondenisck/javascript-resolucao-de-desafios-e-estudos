// Crie uma função para verificar se um valor é Truthy
function verificaVerdadeiro(param) {
  return !!param;
}
console.log(verificaVerdadeiro('biscoito de bolacha'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado) {
  return lado * 4;
}

console.log(quadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function mostraNome(nome, sobrenome) {
  return `Meu nome é ${nome} ${sobrenome}`;
}
console.log(mostraNome('marlon', 'authority'));

// Crie uma função que verifica se um número é par
function verificaSeEPar(number) {
  return number % 2 === 0;
}
console.log(verificaSeEPar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(param) {
  return typeof param;
}
console.log(verificaTipo('oito'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('marlon');
});


// corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises } países.`;
}
    
console.log(precisoVisitar(20));
console.log(jaVisitei(20));