## O que é o escopo de uma variável?
Quando nos referimos a escopo de variável estamos se referindo a qual local de nosso código uma determinada variável pode ser acessada. 
No JavaScript existem somente dois tipos de escopos:
  - `local`
  - `global`
  
Uma variável global é definida quando declaramos uma variável fora de qualquer função, assim ela torna acessível a qualquer parte podendo ser lida e alterada.
```javascript
  var varGlobal = 'Essa variavel é global!';
  
  function testEscopo() {
   var varLocal = 'Essa variavel é local';
   return varLocal;
  }
```
### Invocando
```javascript
  varGlobal;
  'Essa variavel é global!'

  // Varivel local não acessivel, fora do seu contexto;
  varLocal;
  Uncaught ReferenceError: varLocal is not defined

  // Mas acessivel ao invocar a function
  testEscopo();
  'Essa variavel é local'

```


## Garbage Collector (Coletor de lixo)
O principal objetivo da coleta de lixo é permitir que o programador não se preocupe com o gerenciamento de memória dos objetos que eles criam e usam, embora é claro que às vezes não há como evitá-lo.(é sempre benéfico ter pelo menos uma idéia de como funciona a coleta de lixo).

- Referencia Microsoft: [How do the script garbage collectors](https://docs.microsoft.com/pt-br/archive/blogs/ericlippert/how-do-the-script-garbage-collectors-work)

- Referencia IBM: [Memory leak patterns in JavaScript](https://www.ibm.com/developerworks/web/library/wa-memleak/)


```javascript
  var varGlobal = 'Essa variavel é global!';
  
  function testEscopo() {
   // Definindo uma variavel sem o uso do var
   varLocal = 'Essa variavel é local';
   return varLocal;
  }
```
### Invocando
```javascript
  varGlobal;
  'Essa variavel é global!'
  
  varLocal;
  'Essa variavel é local'
```
  
No mesmo exemplo anterior, dentro do contexto de Variáveis Locais ao invés de não utilizar a palavra reservada `var` o Javascript automaticamente colocará ela no escopo `global`.
Assim poderá ser acessada fora da function porém poderá causar outros problemas, como por exemplo: Conflito de nomes, não haverá garbage collector etc..

