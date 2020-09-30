// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var obj = {
  nome: 'Marlon',
  sobrenome: 'auth',
  idade: 28
}
console.log(obj);

// Crie um método no objeto anterior, que mostre o seu nome completo
obj.mostraNome = function() {
  return `Meu nome é ${this.nome} ${this.sobrenome}`
};
console.log(obj.mostraNome());

// Modifique o valor da propriedade preco para 3000
var carro =  {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir: function(pessoa) {
    if(pessoa === 'Homem')
      return 'Latir'
    return ''
  }
}
console.log(cachorro.latir('Homem'));

//

// nomeie 3 propriedades ou métodos de strings
var str = 'string';
console.log(str.length);
console.log(str.charAt());
console.log(str.toUpperCase());
console.log(str.slice(0, 3));
console.log(str.fixed());

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  window.alert('clicado');
});

console.log(btn.classList);
console.log(btn.innerHTML);
console.log(btn.id);

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copyToClipboard() {
  // seleciona o campo
  var copyText = document.getElementById('clipboard');

  // selectiona o texto dentro do input
  copyText.select();
    // para dispositivos mobile
    copyText.setSelectionRange(0, 99999);

  // copia o valor do texto selecionado
  document.execCommand('copy');

  // mostra o texto no console
  console.log('Texto copiado: ', copyText.value);
}