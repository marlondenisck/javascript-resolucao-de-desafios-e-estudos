// array like (Nodelist)
const  lis  = document.querySelectorAll('li');
// Array
const arrayLis = Array.from(lis);
// array like/literal
const obj = {
  0: 'Marlon',
  1: 'Skate',
  2: 'Javascripto',
  length: 3
}
// Array
const objArray = Array.from(obj)

console.log(Array.isArray(lis))
console.log(Array.isArray(arrayLis))
console.log(Array.isArray(obj))
console.log(Array.isArray(objArray))

let carros = ['Ford', 'Fiat', 'Honda'];

// adiciona na posicao 1 kia
carros.splice(0, 0, 'Kia');
console.log(carros);

// adiciona na posicao 4 VW
carros.splice(4, 0, 'VW');
console.log(carros);

// remove na posicao 0 dois carros kia e ford
carros.splice(0, 2);
console.log(carros);

// clona o array
carros.slice();
console.log(carros);

/** Exercicios */

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas)

// Remova o primeiro valor de comidas e coloque em uma variável 
const primeiroComida = comidas.shift();
console.log(primeiroComida);

// Remova o último valor de comidas e coloque em uma variável 
const ultimaComida = comidas.pop();
console.log(ultimaComida);

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());

// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = 
`<section>
  <div>Sobre</div>
  <div>Produtos</div>
  <div>Contato</div>
</section>`
// Substitua section por ul e div com li, 
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')
console.log(html);

carros = ['Ford', 'Fiat', 'Honda'];
// Remova o último carro, mas antes de remover 
// salve a array original em outra variável
const arrayOriginalCopy = carros.slice();
carros.pop();
console.log(arrayOriginalCopy)
console.log(carros);