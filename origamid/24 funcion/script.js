// metodo prototype de funcao

const carro1 = {
  marca: 'Ford',
  ano: 2000
}

function descrevaCarro() {
  console.log(this.marca + ' ' + this.ano);
}

// invocando a funcao 
descrevaCarro(); // undefined undefined
descrevaCarro.call(); // undefined undefined
descrevaCarro.call(carro1); // Ford 2000

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
}

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

/** Quando temos um array like e queremos usar um map devemos 
 * converter em array. Mas existe outra forma com o call */

 const li = document.querySelectorAll('li'); 
 console.log(li); // nodelist

// function separada para melhor vizualizacao dos metodos abaixo
 function possuiAtivo(item) {
  return item.classList.contains('ativo');
}


// Call
const filtro1 = Array.prototype.filter.call(li, possuiAtivo)
console.log(filtro1);


// Apply
// a unica diferenca esta em como repassar os argumentos como array 
const filtro2 = Array.prototype.filter.apply(li, [possuiAtivo]);
console.log(filtro2);


// Bind
// aqui deve repassar uma function como argumento
// porem ela nao é automaticamente executada, isso deve ser feito manualmente
const filtro3 = Array.prototype.filter.bind(li, possuiAtivo);
console.log(filtro3); // retorna uma function
console.log(filtro3()); // executando a function



/** Exercicios */

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, function(acc, item, index) {
  const caracteres = item.innerText.length;
  console.log(`O Paragrafro ${index+1} contem: ${caracteres} caracteres`);
  return acc + caracteres
}, 0);

console.log('O total de caracteres é de: ', totalCaracteres)



// Crie uma função que retorne novos elementos html, com 
// os seguintes parâmetros tag, classe e conteudo.
function criaNovoElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  
  classe ? elemento.classList.add(classe) : null;

  conteudo ? elemento.innerHTML = conteudo : null;

  return elemento;
}

console.log(criaNovoElemento('div', 'ativo', 'banana'));


// Crie uma nova função utilizando a anterior como base 
// essa nova função deverá sempre criar h1 com a classe titulo. 
// Porém o parâmetro conteudo continuará dinâmico
const criaTituloH1 = criaNovoElemento.bind(null, 'h1', 'titulo');

console.log(criaTituloH1('Curso de Javascript'));
console.log(criaTituloH1('Um titulo qualquer'));