## Operadores lógicos
São utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano.
  - `&&` - AND
  
```javascrtipt
  var x = 1;
  var y = 1;
  
  // x é igual a 1? e (AND) y é igual a x?
  x === 1 && y === x
  true
```
  - `||` - OR
  
```javascrtipt
 var x = 1;
  
 // x é igual a 1? ou (OR) x é diferente de 2?
 x === 1 && x !== 1
 true
 
```

  - `!` - NOT
Invertemos o booleano
```javascrtipt
 var x = 1;
  
 // x é igual a 1? com resultado inverta
 ! x === 1
 false
 
 // x é diferente de 1? com resultado inverta
 !x !== 1
 true
 
```
