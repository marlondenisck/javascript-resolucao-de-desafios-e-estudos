O strict mode do ECMAScript 5 é uma forma de optar por uma variante restrita do JavaScript. 
O strict mode faz várias mudanças nas semânticas normais do JavaScript. Primeiro, o strict mode elimina alguns erros silenciosos do JavaScript fazendo-os lançar exceções. 


#### Exemplo
```javascript
  (function() {
    var name = 'Marlon';
    console.log(name);
  })();
  
  console.log(name);
```

- Resultado:
```javascript
  // linha 3:
  Marlon
  // linha 6: 
  Uncaught ReferenceError: name is not defined
```
Já sabemos que isso ocorre por que declaramos a variavel name com o var e isso cria um escopo local.
Se declararmos sem o var o escopo sera global ai na linha 6 funcionara.

Se adicionarmos o `strict mode` na function e por ventura esquecer-mos de declarar a variável sem o `var` seu escopo mudaria de local para global. Com o uso do `strict` a um impedimento lançando um erro logo de cara.

```javascript
  (function() {
    'use strict';
    name = 'Marlon';
    console.log(name);
  })();
  
  console.log(name);
```
- Resultado:
```javascript
  Uncaught ReferenceError: name is not defined
```
Ou seja ele não permite a declaracao de variáveis sem o uso se var.

Mais informações em [Mozilla Docs: Strict Mode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)