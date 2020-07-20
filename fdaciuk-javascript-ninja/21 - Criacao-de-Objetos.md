### Objetos podem ser mutaveis.

- Criando um objeto
```javascript
  var objeto1 = {
    propriedade1: 'valor 1',
    propriedade2: 'valor 2',
   }
```

- Adcionar uma propriedade no objeto
```javascript
  objeto1.propriedade3 = 'valor 3';
```

- Alterar valor de uma propriedade do objeto
```javascript
  objeto1.propriedade3 = 'valor qualquer';
```

- Removendo uma propriedade do objeto
```javascript
  delete objeto1.propriedade3;
```

---

### Objetos podem ser manipulados por referência.

- Criando um segundo objeto
```javascript
  var objeto2 = {
    propriedade3: 'valor 3',
    propriedade4: 'valor 4',
   }
```

- Comparando os 2 objetos
```javascript
  objeto1 === objeto2;
  false
```

- Atribuindo uma variável a um objeto
```javascript
  var objetoCopy = objeto2;
  
   // objeto2   -> { propriedade3: 'valor 3', propriedade4: 'valor 4' }
  // objetoCopy -> { propriedade3: 'valor 3', propriedade4: 'valor 4' }

```

- Comparando o objeto2 com a variavel atribuida
```javascript
  objetoCopy === objeto2;
  true
```
Retornou true! Ou seja, é uma referencia!

- POC, prova do conceito.
Vamos alterar o valor de uma propriedade do objeto que foi referenciado.
```javascript
  objetoCopy.propriedade3 = 'Um novo valor qualquer';
  
  // Retorno agora do objeto
  // objetoCopy -> { propriedade3: 'Um novo valor qualquer', propriedade4: 'valor 4' }
```

- Se chamar agora o objeto2 que é o original
```javascript
  objeto2
  { propriedade3: 'Um novo valor qualquer', propriedade4: 'valor 4' }
  
  // O valor da propriedade3 alterada no objetoCopy foi alterado tambem no pai, por que é objetoCopy foi criado por referência.

```


## Tipos de criação de objeto
- De forma Literal

Exatamente como vimos acima.

- Com o uso do `constructor (new)`
```javascript
  var newObjeto = new Object(
    { prop1: 1 }
   );
  
  newObjeto
  // { prop1: 1 }
```

- Com o uso do `Object.create()`
O método Object.create() cria um novo objeto, utilizando um outro objecto existente como protótipo para o novo objeto a ser criado.

**Sintaxe**
```javascript
  Object.create(proto[, propertiesObject])
```
