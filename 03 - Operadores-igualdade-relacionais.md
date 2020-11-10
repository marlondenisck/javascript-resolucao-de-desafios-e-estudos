## Operadores de igualdade

  - `==` - Igual a
  - `!=` - Diferente de
  
```javascript
   // 1 é igual a 1?
  1 == 1
  true
  
  // 1 é direfente de 2?
  1 != 2
  true
  
  // x é igual a zero?
  var x = 0;
  x == 0;
  true
```

  - `===` - Igual a e do mesmo tipo
  - `!==` - Diferente de, mas do mesmo tipo
  
```javascript
   // n1 tem valor 1 mas string entao se colocar mais um = a expressao deve fazer a comparação do tipo da variavel
  var n1 = '1';
  
  n1 == 1
  true
  
  n1 === 1
  false
  
  // n1 é diferente de 1 mas é do mesmo tipo
  n1 !== 1  
  true
```


## Operadores Relacionais
  - Maior que `>`
  - Menor que `<`
  - Maior ou igual a `>=`
  - Menor ou igual a `<=`
  
```javascript
  var n1 = 10;
  var n2 = 1;
  
  // n1 é MAIOR que n2?
  n1 > n2;
  true
  
  // n1 é MENOR ou igual a n2?
  n1 <= n2
  false
```
