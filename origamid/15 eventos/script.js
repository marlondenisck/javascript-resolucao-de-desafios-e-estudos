const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; //this!
  const target = event.target; // onde o click ocorreu
  const type = event.type; // tipo do evento
  const path = event.path;
  console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('dblclick', executarCallback);


// Quando o usuário clicar nos links internos do site, 
// adicione a classe ativo ao item clicado e remova dos 
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();
  init();
  event.currentTarget.classList.add('ativo');
}

function init() {
  links.forEach((link) => {
    link.addEventListener('click', handleClick);
    if(link.classList.contains('ativo')) 
      link.classList.remove('ativo');
  });
}

init();

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');
console.log(allElements);

function handleElement(event) {
  console.log(event.currentTarget);
}

allElements.forEach((element) => {
  element.addEventListener('click', handleElement);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleElement(event) {
  event.currentTarget.remove();
};


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textoMaior');
  }
};

window.addEventListener('keydown', handleClickT);