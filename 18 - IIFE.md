## O que é?
IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

A segunda parte corresponde à criação da expressã `()`, por meio da qual o interpretador JavaScript avaliará e executará a função. - [Mozilla Dev](https://developer.mozilla.org/pt-BR/docs/Glossario/IIFE)


## Exemplo
Não é possível executar uma função anonima. 
```javascript
  function() {
    console.log(1 + 2);
  }
```

Podemos transformar essa função em uma expressão adicionando `()`.
```javascript
  (function() {
    console.log(1 + 2);
   })
```

Agora que ela é uma expressão de função, pode-se auto invoca-la adicionando mais `()` ao seu final, isso fara com que o Javascript execute aquele bloco de código
entre parênteses e retorne seu resultado.
```javascript
  (function() {
    console.log(1 + 2);
  })();
  
  3
```
