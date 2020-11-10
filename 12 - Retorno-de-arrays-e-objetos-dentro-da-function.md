Indo além do retorno de tipos primitivos: null, 1, 'string'.....

Podemos retornar `arrays` e `objetos`.

### Array 
```javascript
 // Criando
 function retornaArray(){
  return [1, 2, -10, null, 'string'];
 }
 
 // Acessando
 retornaArray()[4];
 'string'
```

### Object 
```javascript
 // Criando
 function retornaObj(){
  return {
    prop1: 123,
    prop2: undefined,
    prop3: function(){
      return 'ola mundo'
      }
  };
 }
 
 // Acessando
 retornaObj().prop2;
 undefined
 
 
 retornaObj().prop3
 [Function: prop3]
 
 // Invocando uma function dentro do objeto
  retornaObj().prop3();
  'ola mundo'

```
