## While
Cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

### Syntax
```javascript
  while (condição) {
    rotina
  }
```

- Repetindo de 1 a 10
```javascript
  // Inicio aqui um contator que tem valor 1
  var contador = 1;
  
  // Verificacao da condição, 1 é menor ou = 10?
  while (contador <= 10) {
    // Mostramos o valor do contator
    console.log(contador);
    // Apos mostrar o valor incrementa 1 ao valor, e retorna para o loop...
    contador ++;
  }
  
   //  O retorno será
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
  
```



## For
A instrução `for` cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, 
seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

### Sintaxe
```javascript
  for ([inicialização]; [condição]; [expressão final]) {
     declaração
   }
 ```
   
- Repetindo de 1 a 10
```javascript
  for (contador = 1; contador <= 10; contador ++) {
     console.log(contador);
   }
   
  //  O retorno será
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
```
