## indexOf
O método `indexOf()` retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. Ele compara o  elementoDePesquisa com os elementos do Array usando igualdade estrita (o mesmo método usado pelo ===, ou triple-equals operator). 


#### Exemplo
```javascript
  var arr = [1, 2, 3, 5, 5];

  console.log( arr.indexOf(3) );
  // 2 - posicao onde esta o valor repassado no parametro
```
- Você também pode inserir um 2º parãmetro no `indexOf` que dirá para ele onde deve-se iniciar a busca no indice.


--- 

## lastIndexOf
O método `lastIndexOf()` retorna o índice da última ocorrência do valor especificado encontrado na String, pesquisando de trás para frente a partir de fromIndex. Retorna -1 se o valor não for encontrado.


---
## isArray
O método `isArray()` retorna true se um objeto é uma array, e false se não é.