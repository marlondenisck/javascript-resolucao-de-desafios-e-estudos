## O que é uma Function?
São blocos de código nomeados e que podem ser invocados ("chamados") usando o operador `()`.

```javascript
  function mostraNome() {
    return 'Meu nome é Marlon Authority';
   }
   
   mostraNome();
   'Meu nome é Marlon Authority'
```

Podemos também passar variáveis por parâmetro:
```javascript
  function mostraNome(nome) {
    return 'Meu nome é ' + nome;
   }
   
   mostraNome('Marlon Authority');
   'Meu nome é Marlon Authority'
   
   function soma(n1, n2) {
    return n1 + n2;
   }
   
   soma(2, 2);
   4
```

Vimos aqui que o operador aritimético `+` em variáveis do tipo `string` concatenam.

### Escopo
Ao criar uma variável dentro de uma function ela não será acessivel fora do `scope` ou seja, fora da function não é possivel ler/pegar o valor da mesma.

```javascript
  function multiplica() {
    var x = 1;
    var y = 2;
    return x * y;
   }
   
   multiplica();
   2
   
   // Se tentar chamar a variável x criada dentro da function acontecera isso
   x
   Uncaught ReferenceError: x is not defined
   
```

Mas o contrário pode ser feito, é possível ler variaveis fora da function
```javascript
  var x = 10;
  
  function subtract(){
    return x - 1;
   }
   
   subtract();
   9
```
