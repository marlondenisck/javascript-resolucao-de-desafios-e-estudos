## Reduce 
O método `reduce()` executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

- `acumulador` - valor inicial (ou o valor do callback anterior),
- `valorAtual` - o valor do elemento atual
- `index` - o índice atual e
- `array` - o array onde a iteração está ocorrendo.

#### Exemplo
```javascript
  var arr = [ 1, 2, 3, 4, 5 ];

  var reduce = arr.reduce(function(acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  });

  // 15
  
 /* 
  Representando o valor do AcumuladorInicial = 0
  // AcumuladorInicial + valorAtual = valorAtualdoAcumulador
  1ª  0 + 1 =  1
  2ª  1 + 2 =  3
  3ª  3 + 3 =  6
  4ª  6 + 4 = 10
  5ª 10 + 5 = 15 <- Resultado
 
  Se o array fosse var arr = ['M', 'a', 'r','l', 'o', 'n'] e repassando para o reduce
  o valor de resposta seria Marlon
  */
```




## reduceRight
O método reduceRight() aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.


#### Exemplo
```javascript
  var arr = ['M', 'a', 'r','l', 'o', 'n']

  var reduceRight = arr.reduceRight(function(acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  });

  // 'nolraM'
```
O contrário do reduce!
