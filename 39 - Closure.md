## Closure
Toda função em javascript possui sua closure.
Closure não é a função em sí mas `escopo fechado`.

```javascript
  (function() {
    'use strict';
    
    var scope = 'global scope';

    function mostraScope() {
      var scope = 'local scope';
      function retornaScope() {
        return scope;
      }
      return retornaScope();
    }

    console.log(scope); // global scope
    console.log(mostraScope()); // local scope

  })();
```

- Um closure (fechamento) é uma função que se "lembra" do ambiente, ou escopo léxico em que ela foi criada.

Estrutura Lexica
```javascript
 
  var contador = 0;
  
  function incrementa () {
    return contador ++;
  }

  console.log(incrementa()); // 0
  console.log(incrementa()); // 1
  console.log(incrementa()); // 2
```

Clusure em "ação"..

```javascript
  var contador = 0;
  
  function incrementa () {
    return contador ++;
  }

  /* antes de executar a funcao incrementa.
  Vamos reatribuir um novo valor ao contador
  */

  function novoValor() {
    contador = 150;
  }

  // executar antes
  novoValor();
  // a closure entra em acao
  console.log(incrementa()); // 150
  console.log(incrementa()); // 151
  console.log(incrementa()); // 152
```