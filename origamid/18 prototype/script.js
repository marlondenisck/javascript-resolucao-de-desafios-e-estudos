function Pessoa1(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
console.log(Pessoa1.prototype);
console.log( typeof Pessoa1.prototype);

const eu = new Pessoa1('Marlon', 28);
console.log(eu.prototype) // retora undefined pq prototype esta ligado a funcao

// Criar propriedade e metodos
Pessoa1.prototype.andar = function() {
  return this.nome + ' andou';
};

console.log(Pessoa1.prototype);
console.log(eu.__proto__.andar()); 
// o retorno do console acima é "undefine andou"
// isso acontece que __proto__ acessou direto ao metodo andar e nao passou
// pelo construtor de pessoa por isso o undefined

// __proto__ recebe heranca do Constructor Pessoa e consegue acessar os 
// metodos criados posteriormente 
// Logo devemos fazer assim
console.log(eu.andar());
// agora sim retorna  "Marlon andou"
// atraves do prototype acessamos um metodo e ao invoca-lo chamou-se a
// funcao construtora de Pessoa

// retornando metodos criados pelo prototipo
console.log(Object.getOwnPropertyNames(Pessoa1.prototype));

// ---
// node list
const lista = document.querySelectorAll('li');
console.log(lista);
// observe que nodelist apesar de ser um array-like 
// nao possui todos os metodos de um array normal

// transformando em array
const listaArray1 = Array.prototype.slice.call(lista);
// tambem da pra fazer com metodo novo
const listaArray2 = Array.from(lista);
console.log(listaArray1);
console.log(listaArray2);



/**
 * Exercicios
 */

// Crie uma função construtora de Pessoas 
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne 
// o nome completo da pessoa
Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
}
const marlon = new Pessoa('Marlon', 'auth', 28);
console.log(marlon.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
console.log(li.constructor.name); // HTMLLIElement
console.log(li.click.constructor.name); // function
console.log(li.innerText.constructor.name); // string
console.log(li.value.constructor.name); // number
console.log(li.hidden.constructor.name); //boolean
console.log(li.offsetLeft.constructor.name); // number

// Qual o construtor do dado abaixo:
console.log( li.hidden.constructor.name); //string