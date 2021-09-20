O construtor Object cria um wrapper de objeto para o valor fornecido.


### Object.assign()
Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino.

### Object.create()
Cria um novo objeto com o objeto e as propriedades do protótipo especificado.

### Object.entries()
Retorna uma array contendo todos os pares [key, value] das próprias propriedades de string enumeráveis ​​de um determinado objeto.


### Object.keys()
Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido.

### Object.values()
Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto.

### Object.freeze()
Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.

### Exemplo
```javascript
  // percorrer um object
  const medidas = {
    polegadas:  39.37007874,
    pes: 3.280839895,
    jardas: 1.093613298,
    milhas: 0.00062137119,
    milhas_nauticas: 0.0005399
  }
  
  

  /* O Object.keys cria um array contendo apenas as propriedades do objeto. */

console.log(Object.keys(medidas))

/* Já o Object.values cria um array apenas com os valores. */

console.log(Object.values(medidas))

/* Por último, o Object.entries cria um array com dois items, o primeiro é a propriedade, e o segundo é o valor. */

console.log(Object.entries(medidas))

```               

## Percorrer um Object
### for...in
O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.
### Exemplo
```javascript
//Objeto
const obj = {
  a:1, 
  b:2, 
  c:3
  };

//Para cada propriedade in objeto faça
for (const prop in obj) {
  console.log("objeto." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "objeto.a = 1"
// "objeto.b = 2"
// "objeto.c = 3"
```

### for...of
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

### Exemplo
```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

---
Diferença entre for...of e for...in
O loop for...in irá iterar sobre todas as propriedades enumeráveis de um objeto.

A sintaxe do for...of é específica para coleções, ao invés de todos os objetos. Ela irá iterar desta maneira sobre os elementos de qualquer coleção que tiver uma propriedade [Symbol.iterator].

O exemplo a seguir mostra a diferença entre um loop for...of e um loop for...in.
```javascript

let iterable = [3, 5, 7];
iterable.novachave = "hello";

for (let i in iterable) {
  console.log(i); 
  // escreve 0, 1, 2, "novachave"
}

for (let i of iterable) {
  console.log(i); // escreve 3, 5, 7
}

```


## Referencia
[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)