function Carro (marcaAtribuido, precoAtribuido) {
  this.marca = marcaAtribuido;
  this.preco = precoAtribuido;
}

/** A palavra chave `new` é resposável por criar um novo objeto
 *  baseado na função que passarmos a frente dela 
 * */

// const hyundai = new Carro();
//  // 1 Cria um novo objeto
//  hyundai = {};

//  // 2 Define o protótipo
//  hyundai.prototype = Carro.prototype;

//  // 3 Aponda a variável `this` para o objeto
//  this = hyundai;

//  // 4 Executa a função, substituindo o this pelo objeto
//  hyundai.marca = 'Marca';
//  hyundai.preco = 0;
// // ----

const honda = new Carro('Honda', 3000);
console.log(honda);

// const Dom = {
//   seletor: 'li',
//   element: function element() {
//     return document.querySelector(this.seletor); 
//   },
//   ativar: function ativar() {
//     this.element().classList.add('ativo');
//   } 
// }

// function Dom (seletor) {
//   this.element = function() {
//     return document.querySelector(seletor); 
//   };
//   this.ativar = function() {
//     this.element().classList.add('ativo');
//   } 
// }

// const ul = new Dom('ul');
// const li = new Dom('li:last-child');
// console.log(ul);
// console.log(li.ativar());


/** Exercicios */

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) { 
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou'); 
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Maria', 15);
console.log(joao, maria, bruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes 
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
};

const li = new Dom('li');
console.log(li.elements);
console.log(li.addClass('test'));

const newMenu = new Dom('nav');
console.log(newMenu)
console.log(newMenu.removeClass('menu'));
