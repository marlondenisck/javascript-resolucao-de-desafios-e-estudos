## join()
O método `join()` junta todos os elementos de uma array em uma string e retorna esta string.

#### Exemplo

```javascript

  var arr = ['arroz', 'feijao', 'macarrao'];
  
  // Por padrão não é necessário passar parámetros
  // O padrão já a virgula mas neste exemplo usamos uma virgula e espaço retornarndo uma string espaçada
  arr.join(', ');
  'arroz', 'feijao', 'macarrao'
  
```

- O metodo join não tem efeito colateral pois você só está jogando a saída para uma string.

---

## reverse()
Auto descritivo, irá inverter os valores do array;


#### Exemplo

```javascript

  var arr = ['arroz', 'feijao', 'macarrao'];
  
  arr.reverse();
  ['macarrao', 'feijao', 'arroz']
  
```

- O metodo reverse tem efeito colateral, se usa-lo saiba que o array sera modificado definidamente.

---


## sort()

Este método ordenara em ordem alfabetica.


#### Exemplo

```javascript

  var arrInvertido = ['macarrao', 'feijao', 'arroz'];
  
  arrInvertido.sort();
  ['arroz', 'feijao', 'macarrao']
  
```

- O metodo sort tem efeito colateral também.


---

## toString
O método `toString()` retorna uma string representando um array específico e seus elementos.
Muito parecido com o join mas o join pode passar caracteres como parametro.

#### Sintaxe
```javascript
  arr.toString()
```

---

## concat
O método `concat()` retorna um novo array contendo todos os arrays ou valores passados como parâmetro


#### Exemplo

```javascript

  var array1 = ['1', '2', '3'];
  var array2 = ['4', '5', '6'];
  
  array1.concat(array2);
  [ '1', '2', '3', '4', '5', '6' ]
```

---

## unshift, shift
O método `unshift()` adiciona um ou mais elementos no **início** de um array e retorna o número de elementos (propriedade length) atualizado.

#### Exemplo

```javascript

  var arr = ['1', '2', '3'];
  
  arr.unshift('0');
  // 4
  
  arr
  // [ '0', '1', '2', '3' ]
```

- Ja o método `shift()` remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 

```javascript 
  arr.shift();
  // '0'
  
  arr;
  // [ '1', '2', '3' ]
```

---

## slice
O método `slice()` retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

#### Syntaxe
```javascript
  arr.slice(index, final);
```

#### Exemplo
```javascript
  var arr = ['1', '2', '3', '4', '5'];
  
  // aqui retornara tudo a partir do indice 1 que no caso é o 2
  arr.slice(1);
  [ '1', '2', '3', '4', '5' ]
  
  // aqui retornara do indice 2 ate o indice 4
  arr.slice(2, 4);
  [ '3', '4' ]
```

---


## splice
O método `splice()` altera o conteúdo de um array, adicionando e removendo elementos.
- Este metodo possui efeito colateral

#### Exemplo
```javascript
  var arr = ['1', '2', '3', '4', '5'];
  
  // aqui retornara o conteudo que foi removido, neste caso tudo apartir do 3
  arr.splice(2);
  // [ '3', '4', '5' ]
  
  // meu array agora ficou
  arr
  [ '1', '2' ]
  
  // outra forma é
  var arr = ['1', '2', '3', '4', '5'];
  // remove 2 elementos a partir do indice 0
  arr.splice(0, 2);
  [ '1', '2' ]
  
  arr;
  [ '3', '4', '5' ]
```

- Da para adicionar também.

```javascript
  // adicione nada (0) antens do indice 2 e adicione os elementos ('4', '5') a partir do indice 2.
  arr.splice(2, 0, '4', '5');
  []
  
  // meu novo array
  arr
  [ '1', '2', '4', '5' ]
```

- E também da pra remover e adicionar ao mesmo tempo.
```javascript
    newArray = [1, 2, 3, 4, 5, 6, 7, 8];
    
    // remove 1 elemento a partir do indice 7 e adicione os elementos ('a', 'b', 'c' ) a partir do indice 7
    newArray.splice(7, 1, 'a', 'b', 'c' )
    
    // removed [ 8 ]
    
    // novo array
    newArray
    [1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c']
    
    
    // outro exemplo
    array = [ 1, 'a', 'b', 'c', 5, 6 ];
    
    // a partir do indice 1 remova 3 elementos, e apos acidione os elementos (2, 3, 4)
    array.splice(1, 3, 2, 3, 4);
    [ 'a', 'b', 'c' ]
    
    meu novo array
    [ 1, 2, 3, 4, 5, 6 ]
    
```

---
