/** Host 
 * sao aqueles implementados pelo proprio ambiante.
 * por exemplo: no browser possuimos objetos do DOM 
 * como domlist. htmlcollection.
 * E no nodejs tambem havera objetos direfente do que
 * no browser
 */
// Objetos do browser
// NodeList, HTMLCollection, Element 

// verificar compatibilidade
console.log(typeof Array.from !== undefined);


/** Exercicios */
// liste 5 objetos nativos
console.log(Function);
console.log(Object);
console.log(Array);
console.log(String);
console.log(Number);

// list 5 objetos do browser
console.log(window);
console.log(history);
console.log(document);
console.log(HTMLCollection);
console.log(NodeList);

// liste 2 metodos, propriedades ou objetos 
// presente no chrome que nao existem no firefox
console.log(typeof document.webkitHidden !== undefined);
console.log(typeof document.webkitVisibilityState !== undefined);
