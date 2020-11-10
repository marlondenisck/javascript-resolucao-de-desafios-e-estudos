### Quando usada em metodos e objetos:
- Referência o proprio objeto.

#### Exemplo
```javascript
  var myObject = {
    myProperty1: 123,
    methodInit: function() {
      return this;
    }
  }
```

Vamos retornar o objeto:
```javascript
  console.log(myObject);
  
  // Retornara o objeto certo?!
  { myProperty1: 123, methodInit: [Function: methodInit] }
  
``` 

Vamos executar o metodo dentro do objeto, ele possui a palavra reservada `this`:
```javascript
  console.log(myObject.methodInit());
  
  // Retornou o objeto? sim isso memso, o this neste caso referencia o proprio objeto;
  { myProperty1: 123, methodInit: [Function: methodInit] }
  
```

Da para fazer retorno das proprias propriedades do objeto:
```javascript
  var myObject = {
    myProperty1: 123,
    methodInit: function() {
      return this.myProperty1;
    }
  }
  
  console.log(myObject.methodInit());
  123
  // O metodo usando o this retornou o valor da propriedade
  
```

---

### Contexto global
No contexto de execução global (fora de qualquer função), `this` refere-se ao `objeto global`, seja em `modo estrito` ou não.

```javascript
console.log(this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

```
---

### Quando usado em funções:
Dentro de uma função, o valor de `this` depende de como a função é chamada.

#### Chamada simples
Como o código a seguir não está no `modo estrito`, o valor de `this` não é definido pela chamada. 
Por padrão, `this` será o `objeto global` que no navegador é o `window`.

```javascript
  function f1(){
    return this;
  }
 
  // No navegador
  f1() === window;  // true

```
