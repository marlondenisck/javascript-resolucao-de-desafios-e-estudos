## prototypes
Não é recomendável a inserção de métodos dentro de construtores por acarretar em um grande e desnecessário uso de memória.

### O problema (Má Implementação)
Criamos o construtor de pessoas Person, com a definição de métodos dentro do corpo da função, conforme abaixo:

```javascript
function Person(name) {  
    this.name = name;
    this.sayName = function() {
                console.log(this.name);
        };
    this.toString = function() {
                return "[Person " + this.name + "]";
        };
}
```

Como dissemos, o grande problema é que cada instância teria seu próprio método ocupando um espaço diferente na memória. Isso é facilmente constatado abaixo:

```javascript
  var person1 = new Person("Nicholas");  
  var person2 = new Person("Greg");

  console.log(person1.sayName === person2.sayName); 
  //false  
```

Considerando que são apenas duas instâncias e dois métodos, o dano não é tão grande, mas imagine que você tivesse trabalhando com dados de toda população brasileira, cerca de 200 milhões de habitantes. Isso seriam (400.000.000 - 2) espaços desnecessários armazenados na memória.

### A Solução (Boa Implementação)
O uso de prototypes vem justamente pra centralizar essa referência. Vejamos como seria a implementação anterior, mas agora fazendo uso deles:

```javascript
function Person(name) {  
        this.name = name;
}

Person.prototype = {  
        constructor: Person,
        sayName: function() {
                console.log(this.name);
        },
        toString: function() {
                return "[Person " + this.name + "]";
        }
};
```

O resultado visual do que acabamos de fazer segue abaixo. Note que os métodos sayName e toString são agora propriedades de Person.prototype e as instâncias fazem referência a eles.


<img src=".github/prototype-contructor.png">