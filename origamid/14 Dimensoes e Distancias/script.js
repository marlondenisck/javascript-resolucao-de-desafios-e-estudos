const section = document.querySelector('.animais');

// Retorna o height + padding
console.log(section.clientHeight); 

// Retorna o height + padding + border
console.log(section.offsetHeight); 

// Height total (mesmo dentro de scroll)
console.log(section.scrollHeight); 

// Mesmo coisa com o uso do width
// Retorna o width + padding
console.log(section.clientWidth); 

// retorna a distancia entre o topo do elemento, e o topo da pagina
console.log(section.offsetTop); 

// Metodo que retorna um objeto de valores e distancias
const rect = section.getBoundingClientRect('.animais');
console.log(rect);

// width da janela
console.log(window.innerWidth);

// soma de dev tools tb
console.log(outerWidth);

// height
console.log(window.innerHeight);

// height + barra de endereco
console.log(window.outerHeight);

// distancia total do scroll horizontal
console.log(window.pageYOffset);

// distancia total do scroll vertical
console.log(window.pageXOffset);


// Exercicios

// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
/** O javascript carrega mais rapido que as imagens entao
 * deve-se primeiro esperar todo carregamento (onload) para dai entao
 * fazer o restante do codigo
 */

function somaImagens () {
  const allImages = document.querySelectorAll('img');
  
  let soma = 0;
  
  allImages.forEach((img) => {
    soma += img.offsetWidth;
  });
  
  console.log(soma);
}
// 1º carrega a pagina e ai chama a funcao
window.onload = function() {
 somaImagens();
};


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const wid = link.offsetWidth;
  const hei = link.offsetHeight;
  if(wid >= 47 && hei >= 47) {
    console.log(link, 'Possui boa acessibilidade');
  } else {
    console.log(link, 'Não possui boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches;
if(small)
console.log('Mobile');
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
  console.log(menu);
