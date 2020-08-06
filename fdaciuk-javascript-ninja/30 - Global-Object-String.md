#### Alguns metodos referente aos do array podem ser vistos aqui.


## length
A length é a propriedade de um objeto String representa o comprimento de uma string no codigo UTF-16.

```javascript
  var x = 'Mozilla';

  x.length;
  // 7
```

---

## charAt(index)
O método charAt() retorna o caractere especificado a partir de uma string.

```javascript
  var x = 'Mozilla';

  x.charAt(0);
  // M
```

Também funciona usando de forma parecida com um array-like 
```javascript
  x[0];
  // M
```

---


## concat() 
O Método concat() combina o texto de duas ou mais strings e retorna uma nova string. 
As alterações de texto de uma string, não afetam a outra string.

```javascript
  var hello = 'Hello, ';
  console.log(hello.concat('world'));
  
  //'Hello, world'
```

---

## indexOf()
O método indexOf() retorna o índice da primeira ocorrência do valor especificado em searchValue dentro do objeto String para o qual foi chamado, 
começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado.
Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0, e o índice do último caractere de uma string chamada stringName é stringName.length - 1


---

## replace()
O método replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto. 
O padrão pode ser uma string ou uma RegExp, e o substituto pode ser uma string ou uma função a ser chamada por cada combinação.

```javascript
  var x = 'Mozilla';

  x.replace('a', 'o');
  // 'Mozillo'
  // Trocou a por o
```

---

## slice()
O método slice() extrai uma parte de uma string e retorna uma nova  string.

```javascript
  var x = 'Mozilla';

  x.slice(2);
  // 'zilla'
  
  x.slice(0, 2);
  //'Mo'
```

---

## split
O método split() divide um objeto String em um array de strings ao separar a string em substrings.

```javascript
  var x = 'Mozilla';

  x.split('i');
  // [ 'Moz', 'lla' ]
```

---

## substring()
O método substring() retorna um subconjunto de uma string entre um indice e outro, ou até o final da string.
#### mesma coisa que o slice

