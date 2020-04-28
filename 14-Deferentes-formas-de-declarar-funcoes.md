## Diferentes maneiras de declarar funções

- **Função anônima - função sem nome**

  São usadas como _callbacks_ e _IIFE: immediately invoked function expressions(expressões de função imediatamente invocadas)_.

  ```javascript
    function (firstName) {
     return `Dr. ${firstName}`;
    }

  ```

- **Função de expressão**

  ```javascript
  const doctorize = function(firstName) {
    return `Dr. ${firstName}`;
  };
  ```

- **Arrow Functions**

  - Sintaxe concisa e mais curta

  - Não tem escopo próprio para se referir à palavra-chave `this`

  - São funções anonimas

    ```javascript
    const polegadasParaCM = polegas => {
      return polegadas * 2.54;
    };
    ```

- **IIFE: expressões de função imediatamente invocadas**

  ```javascript
  (function(idade) {
    return `Você é uma boa pessoa e possuí ${idade} anos de idade`;
  })(10);

  // Os parênteses são executados primeiro no JavaScript, portanto, agrupamos a função em ().
  // A função é executada imediatamente.
  // O argumento passado aqui é 10 para o parâmetro idade.
  ```

- **Metodos:**

  - Uma função que vive dentro de um objeto.

  - Por exemplo `console.log('hey')` : aqui o `log` é a função e `console` é o objeto.

  