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




