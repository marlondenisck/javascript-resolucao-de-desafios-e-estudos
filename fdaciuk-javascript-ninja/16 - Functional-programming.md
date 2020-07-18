## O que é?
Segundo o wikipedia: “Programação funcional é um paradigma de programação — um estilo de construção de uma estrutura e elementos de programas de computador — 
que trata a computação como avaliação de funções matemáticas e evita mudança de estado e dados mutáveis”.

Se resume em escrever programação que se baseiam em funções ou tem caracteristicas parecidas com functions.

- Functions em javascript são `objetos de primeira classe`. O que significa que functions tem o mesmo tratamentos de objetos no javascript.
- Tudo aquilo que pode ser feito em objetos podem ser feitos com `functions`

---
## Objetos literais
```javascript
  var car = {
    nome: 'Lancer Evo 10',
    marca: 'Mitsubishi'
  }
```

## Funções literais
```javascript
  function sum(n1, n2) {
    return n1 + n2;
  }
```

## Funções retornando objetos
```javascript
function person() {
    var info = {
      name: 'Marlon',
      lastName: 'Authority'
    }
    return info;
  }
  
  // Invocando a função
  person()
  { name: 'Marlon', lastName: 'Authority' }
  
  // Acessando o valor de uma propriedade do objeto
  person().name
  'Marlon'
```

## Funções retornando funções
```javascript
  function add(x) {
    function sum(y) {
      return x + y;
    }
    return sum;
  }
```

#### Podemos usar a function acima de 2 formas:

1. Pode atribuir a function em uma variável:
```javascript
  // Atribui a variavel passando a function com seu primeiro parametro
  var addxy =  add(1);
  // Invoca a variável passando o segundo parametro
  addxy(1);
  2
```

2. Outra forma seria auto invocar a function utilizando () desta forma:
```javascript 
  add(1)(2)
  3
```

--

### Concluindo
No javascript pode-se retornar funçoes dentro de funções e também pode-se passar objetos e/ou funções por paramêtro.

```javascript

  function showOtherFunction(func) {
    return func() + ' dentro desta function';
  }
  
  function parameter() {
    return 'parametro repassado';
   }
   
   // Invocando e passando parametro
   showOtherFunction(parameter)
   'parametro repassado dentro desta function'
```

#### Nesta mesma pegada, da pra fazer o seguinte:

```javascript
/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

  // 1- Passamos operador pela funcao
  function calculator(operator) {
  // 2- retornarmos ja o objeto com a funcao, passando 2 numeros;
  return function(n1, n2) {
    // 3- inicia uma variavel local sem valor.
    var res;
    // 4- Quando o operator for true, executara o case especificado, e atribuira seu valor na variavel res.
    switch (operator) {
      case '+': res = n1 + n2;
        break;
      case '-': res = n1 - n2;
        break;
      case '*': res = n1 * n2;
        break;
      case '/': res = n1 / n2;
        break;
      case '%': res = n1 % n1;
        break;
      default: return 'Operação inválida.';
    }
    // 5- retorna a frase com o resultado da operacao
    return `Resultado da operação ${n1} ${operator} ${n2} = ${res}`;
  };
}

/*
Declaramos uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(1, 2));
3
```
