
## Tipos primitivos
  - number, string, boolean, null e undefined

## Tipos de objeto
A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. 
Um objeto é uma coleção de `propriedades`, e uma propriedade é uma associação entre um `nome (ou chave) e um valor`. 
Um valor de propriedade pode ser uma função, que é então considerada um `método` do objeto. 
```javascript
  var pessoa = {
    nome: 'Marlon',
    sobrenome: 'Authority',
    sexo: 'Masculino',
    idade: 27
  }
```

- Pode-se adicionar functions dentro do objeto, que chamamos de métodos. Com isso podemos manipular dados internos ou retornar valores.
```javascript
  // Metodo que altera a idade
  pessoa.fazerAniversario = function() {
  pessoa.idade ++;
  }
  
  // Metodo que retorna a idade
  pessoa.mostrarIdade = function() {
  return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
  }
```
- O objeto fica assim agora: 
```javascript
  pessoa
  {
    nome: 'Marlon',
    sobrenome: 'Authority',
    sexo: 'Masculino',
    idade: 27,
    fazerAniversario: [Function],
    mostrarIdade: [Function]
  }
```

- Chamando os Métodos:
```javascript
  pessoa.fazerAniversario();
  pessoa.mostrarIdade()
  'Olá, eu tenho 28 anos!'
```
