// Quando usar ?
// Sempre que necessitar de um novo array em uma nova variavel vai com map
// Se for so para repassar algo use forEach
// Trazer algo interno vai de filter
// Minimizar o array vai de reduce

const carros = ['Ford', 'Fiat', 'Honda'];

const mapCarros = carros.map((item, index, array) => {
  return item;
});

console.log('Array carros', carros);
console.log('Array mapeado', mapCarros);
console.log('Os arrays sao iguais?', carros === mapCarros)




// reduce
const aulas1 = [10, 20, 30, 40];

const reduceAulas = aulas1.reduce(function(acc, item,) {
  console.log(acc, item );
  return acc + item
}, 0); 
console.log(reduceAulas);

const numeros = [10, 5, 40, 33, 100, 50];

const qualMaiorNumero = numeros.reduce((anterior, atual) => {
  console.log(anterior, atual);
  return anterior < atual ? atual : anterior;
});

console.log(qualMaiorNumero);


// usar reduce com um array de objeto
const tecnologias = [
  {
    id: 1,
    name: 'CSS'
  }, 
  {
    id: 2,
    name: 'HTML',
  },
  {
    id: 3,
    name: 'Javascript',
  },
];

const listaTec = tecnologias.reduce((acc, autal, index) => {
  acc[index] = autal.name;
  return acc;
}, {});

console.log(tecnologias);
console.log(listaTec);



// filter
const array1 = ['Banana', undefined, 'Pera', null, '', 0, 'Uva', 'Maca'];
const array1Limpa = array1.filter(function(fruta) {
  return fruta
});
console.log(array1Limpa);



// some retorna se o valor retornado é correnspondente a truthy ou falshy
const frutas1 = ['banana', 'pera', 'uva'];
const temUva = frutas1.some((item) => {
  return item === 'uva'
});
console.log(temUva);

// find
const numeros2 = [6, 42, 1, 9, 55];
const buscaMaior = numeros2.find(function(n) {
  return n > 45;
});
console.log(buscaMaior);


/** Exercicios */


// Selecione cada curso e retorne uma array 
// com objetos contendo o título, descricao, 
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);

const objetoCurso = cursosArray.map((curso) => {

  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  
  return {
    titulo,
    descricao,
    aulas, 
    horas
  }

});
console.log(objetoCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros3 = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros3.filter((n) => n > 100);
console.log(maiores100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
});
console.log(possuiBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana', 
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99' 
  },
  {
    item: 'Carne', 
    preco: 'R$ 25,49'
  }, 
  {
   item: 'Laranja',
   preco: 'R$ 5,35' 
  },
  {
    item: 'Quejo', 
    preco: 'R$ 10,60'
  }
];

const valorTotal = compras.reduce((acc, item) => {
  const numeroLimpo = +item.preco.replace('R$', '').replace(',', '.');
  return acc += numeroLimpo
}, 0); 

console.log(valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));