## map
O método `map()` invoca a função **callback** passada por argumento para cada elemento do Array e devolve um novo Array como resultado.


#### Sintaxe
```javascript
  array.map(callback(item, index, array){
    //
   });
```

A função callback é chamada com três argumentos: o valor do elemento corrente`(item)`, o índice do elemento corrente`(index)` 
e o `array original` que está sendo percorrido.

#### Exemplo
```javascript
  var array = [1, 2, 3, 4, 5, 6];
  
  var map = array.map(function(item, index, array){
    return item + 1;
   });
   
   console.log(map);
   [ 2, 3, 4, 5, 6, 7 ]
   console.log(array);
   [ 1, 2, 3, 4, 5, 6 ]
```
Observe que o map cria um novo array..

---

## filter
O método `filter()` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

A sintaxe parecida com a do map.

#### Exemplo
```javascript
  var array = [1, 2, 3, 4, 5, 6];
  
  var filterInpar = array.filter(function(item, index, array){
    return item % 2 !== 0;
   });
   
   console.log(filterInpar);
   [ 1, 3, 5 ]
   
   // Se ao invez de usar filter tivesse usado map, ele retornaria a representação booleana true ou false do array;
   
```
```javascript
  function soMaioresDe10(numero) {
    return numero >= 10;
  }

  var filtrado = [12, 5, 8, 130, 44].filter(soMaioresDe10);
  
  console.log(filtrado);
  [12, 130, 44]
```
