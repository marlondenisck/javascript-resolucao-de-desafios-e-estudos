##  Variáveis ​​e declarações

Ponto e vírgula são usados para finalizar uma declaração. você pode optar por não escrevê-los _(porque existe ASI: Inserção Automática de Ponto e Vírgula em Javascript)_.

### Declarando variaveis:

`var first = 'Marlon';`

`let first = 'Marlon';`

`const first = 'Marlon';`

(o valor aqui é 'Marlon')

-   `let` e `const` foram introduzidos no ES6 (mais recente).
    
-   `var` e `let` podem ser atualizados, o `const` não.
    
    ```javascript
      var x = 'hey';
      y = 'hi';
      
      let cool = true;
      cool = false;
      
      const age = 10;
      age = 11; // ERROR
    
    ```
    
-   **Scopo:**
    
    -   **var** : _escopo de funcao_ (disponível apenas dentro das funções dos pais)
        
    -   **let** e **const** : _escopo de bloco_ (disponível dentro de um bloco indicado por chaves _{ }_ )
        
-   **Opinião (o que usar):** Use `const` por padrão; se o valor da variável precisar mudar, use `let`. Quase nunca use `var`.
    
-   **Convenções de Nomenclatura Variável:**
    
    -   Não deve começar com caixa alta, a menos que seja uma _class_.
    -   Deve começar com **a-z** ou **_** ou **$**.
    -   Se uma variável tiver várias palavras, você poderá usar:
        -   _Camel-case:_ `let iLovePizza = true;`
        -   _Upper Camel case (no caso de classes):_ `ILovePizza`
        -   _Snake case: `let i_love_pizza=true;`_