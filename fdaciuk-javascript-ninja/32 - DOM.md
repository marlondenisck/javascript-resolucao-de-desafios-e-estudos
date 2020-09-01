## Document Object Model
O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas p acessar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.

Uma página da Web é um documento. Este documento pode ser exibido na janela do navegador ou como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.


### Pegar Elementos
- getElementById(`id`);
- getElementsByTagName(`tag`);
- getElementsByClassName(`css class`);
- querySelector(`css query`);
- querySelectorAll(`css query`);


### Criar e Deletar Elementos
- createElement(`name`);
- .appendChild(`node`);
- .removeChild(`node`);
- .replaceChild(`new`, `old`);
- .insertBEFORE(`new`, `old`);


### Conteúdo
- .innerHTML
- .textContent
- .value


### CSS
- .className
- .classList
- .classList.add(`class`);
- .classList.remove(`class`);
- .classList.toggle(`class`);


### Atributos
- .hasAttribute(`name`);
- .getAttribute(`name`);
- .setAttribute(`name`, `value`);
- .removeAttribute(`name`);


### Eventos
- .addEventListener(`triguer`, `callback function`, `boolean`)