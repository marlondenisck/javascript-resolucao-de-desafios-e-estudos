const pessoa1 = new Object({
  nome: 'marlon'
});

console.log(pessoa1);

const carro = {
  marca: 'Marca',
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
};

const novoCarro = Object.create(carro);
novoCarro.marca = 'Honda'
console.log(novoCarro.acelerar())


const carro2= {
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
};

const carroHonda = Object.create(carro2);
carroHonda.init('Honda');
console.log(carroHonda.acelerar());


/** Exercicios */
// Crie uma função que verifique corretamente o tipo de dado
function verificaTipoDado(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(verificaTipoDado([]));
console.log(verificaTipoDado({}));
console.log(verificaTipoDado(''));
console.log(verificaTipoDado(1));
console.log(verificaTipoDado(function(){}));

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true
  }
});
console.log(quadrado);
console.log(quadrado.lados = 10);
console.log(quadrado); // continua sem mod


// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);
console.log(delete configuracao); // false


// Liste o nome de todas as propriedades do protótipo de String e Array
console.log('Lista de nomes das propriedades de string', Object.getOwnPropertyNames(String));
console.log('Lista de nomes das propriedades de array', Object.getOwnPropertyNames(Array));