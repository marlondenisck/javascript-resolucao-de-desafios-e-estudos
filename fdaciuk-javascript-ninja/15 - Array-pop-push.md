## Push
Adiciona um novo value no final array.

```javascript
  myArray = [1,2,3,{prop1: 'value'}, [null], undefined, -10];
  
  // passando valor 99 por paramêtro
  myArray.push(99);
  
  // Retorno informa a lenght do array
  8
  
  // Array com novo valor incluido
  myArray;
  [ 1, 2, 3, { prop1: 'value' }, [ null ], undefined, -10, 99 ]
```


## Pop
Remove o último value do array
```javascript
  myArray.pop();
  
  // No retorno mostra o que foi removido, neste caso o 99
  99 
 
  myArray;
  [ 1, 2, 3, { prop1: 'value' }, [ null ], undefined, -10 ]
```
