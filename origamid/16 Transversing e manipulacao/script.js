const menu1 = document.querySelector('.menu');

// todo o html do elemento incluindo ele mesmo
console.log(menu1.outerHTML);

//html interno
console.log(menu1.innerHTML);

// texto
console.log(menu1.innerText);

// substitiu o conteudo de dentro
console.log(menu1.innerHTML = '<p>novo menu</p>');

// TRANSVERSING
const lista = document.querySelector('.animais-lista');

// pai
console.log(lista.parentElement);

// pai do pai
console.log(lista.parentElement.parentElement);

// elemento acima
console.log(lista.previousElementSibling);

// elemento abaixo
console.log(lista.nextElementSibling);

// HTMLCollection com os filhos
console.log(lista.children);

// primeiro filho
console.log(lista.children[0]);
// ultimo filho
console.log(lista.children[--lista.children.length]);

// todos li`s
console.log(lista.querySelectorAll('li'));
//ultimo filho
console.log(lista.querySelectorAll('li:last-child'));


const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// move lista para o final de contato
contato.appendChild(lista);

// insere a lista antes de titulo
contato.insertBefore(lista, titulo);

// substitui titulo por lista
contato.replaceChild(lista, titulo);

// remove titulo de contato
// contato.removeChild(titulo);

// CRIAR NOVO ELEMENTO
const animais1 = document.querySelector('.animais');
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('titulo');

animais1.appendChild(novoH1);

// CLONAR ELEMENTO
const cloneTitulo = titulo.cloneNode(true); // true traz os filhos
console.log(cloneTitulo);




/**
 * Exercicios
 */

 // Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
footer.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const firstDt = faq.querySelector('dt');
console.log(firstDt)

// Selecione o DD referente ao primeiro DT
const nextDD = firstDt.nextElementSibling;
console.log(nextDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;