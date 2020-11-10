## Document Object Model
O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam acessar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.

Uma página da Web é um documento. Este documento pode ser exibido na janela do navegador ou como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.

## NodeList
Objetos NodeList são coleções de nodos semelhantes aos objetos retornados pelos métodos Node.`childNodes` e document.`querySelectorAll()`.

- Apesar de NodeList não ser um Array, é possível ser iterada usando o método forEach(). Muitos navegadores antigos ainda não implementaram este método.

Em alguns casos, NodeList é uma coleção viva, ou seja, toda alteração feita no DOM reflete nos elementos da coleção. 


### Percorrer elementos
- .parentNode  // traz o `nó` pai do elemento selecionado.

- .childNodes // traz todos os `nós` filhos do elemento selecionado(as quebras de linha tb são trazidas em uma nodelist).

- .firstChild // primeiro filho
- .lastChild // ultimo

- .nextSibling // quem é o irmão

#### propriedades
- .nodeType // qual tipo de nó
  - `1` element (html)
  - `9` document
  - `3` text
  - ...

- .nodeValue // conteúdo dos elementos text e comment

- .nodeName // auto descritivo



### Atributos
- .hasAttribute(`name`);
- .getAttribute(`name`);
- .setAttribute(`name`, `value`);
- .removeAttribute(`name`);


### Criar e Deletar Elementos
- createElement(`name`); // cria elemento html
- .appendChild(`node`); // insere como filho
- .removeChild(`node`); // remove o filho
- .replaceChild(`new`, `old`); // susbstitui o filho existente
- .insertBEFORE(`new`, `old`); // insere antes
- .cloneNode(`boolean`) // clona um nó existente, se passar `true` ele copia o conteudo também.

### Pegar Elementos
- getElementById(`id`);
- getElementsByTagName(`tag`);
- getElementsByClassName(`css class`);
- querySelector(`css query`);
- querySelectorAll(`css query`);

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

### Suporte
https://caniuse.com/


