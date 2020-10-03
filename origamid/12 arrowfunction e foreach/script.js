/**
 * Arrow Function
 * Uma expressão arrow function possui uma sintaxe mais curta quando comparada 
 * a uma expressão de função (function expression) e não tem seu próprio:
 * this, arguments, super ou new.target. 
 * Estas expressões de funções são melhor aplicadas para funções que não sejam
 * métodos, e elas não podem ser usadas como construtoras (constructors).
 */

const frutas = [
  'Banana',
  'Laranja',
  'Jabuticaba',
  'Limão'
];

// Forma normal
frutas.forEach(function ( fruta ) {
  console.log(fruta);
});

// Forma arrow function
frutas.forEach(( fruta )  => {
  console.log(fruta);
});


// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => { 
  console.log(item, index);
});

let i = 0; 
imgs.forEach(() => {
  console.log(i++); 
});

imgs.forEach(() => i++);