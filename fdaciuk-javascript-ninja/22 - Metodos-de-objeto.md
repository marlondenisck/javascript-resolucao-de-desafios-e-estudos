## Object.keys()

O método`Object.keys()` retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço `for in` 
(a diferença é que um laço for-in  enumera propriedades que estejam na cadeia de protótipos).


#### Sintaxe
```javascript
  Object.keys(obj);
```

#### Exemplo
```javascript
  var obj = {
    prop1: 1,
    prop2: 'string',
    prop3: true
  }
  
  Object.keys(obj);
  // Ele retorna um array
  ['prop1', 'prop2', 'prop3' ]
 
  // Com isso podemos ainda encadear mais coisas como o length
  Object.keys(obj).length
  3
```

---

## isPrototypeOf()

O método `isPrototypeOf()` checa se um objeto existe em na cadeia de protótipos de um outro objeto.
Ou seja, se ele é herdado ou não. (vimos herança no arquivo anterior).


#### Sintaxe
```javascript
  prototypeObj.isPrototypeOf(objeto)
```

#### Exemplo
```javascript
  // Criaremos um object herdando o object criado ali em cima.
  var objHerdado = Object.create(obj);
  
  // Faremos a execução do método, que ira retornar true (caso for um object herdado), ou fase (caso for um object não herdado).
  obj.isPrototypeOf(objHerdado);
  true
  
 ```
 
 
 ## JSON.stringify()
 O método `JSON.stringify()` converte valores em javascript para uma String JSON. 
 
 #### Exemplo
 ```javascript
  var objString = JSON.stringify(obj);
  
  // chamando a variavel retorna uma string do object criado logo mais acima.
  objString;
  '{"prop1":1,"prop2":"string","prop3":true}'
```

- Também é possível realizar o processo inverso com o `JSON.parse()`.
 ```javascript
    JSON.parse(objString);
    // Retorna o object puro
    { prop1: 1, prop2: 'string', prop3: true }
```

