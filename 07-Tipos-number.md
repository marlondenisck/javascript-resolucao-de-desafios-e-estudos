
## Number

```javascript
const idade = 27;
const dinheiro = 1000.50
console.log(typeof idade); // number
console.log(typeof dinheiro); // number

```

-   `typeof` é usado para descobrir o 'tipo' de uma variável.
    
-   Várias operações: adição, subtração, multiplicação, divisão podem ser feitas.
    
-   Exemplo
    
    `"10" * "10" // 100 (numero) - converte automaticamente string em number`
    

O exemplo acima funciona com _multiplicação, divisão e subtração e não adição_, porque o sinal ``+`` também é usado para concatenação.

-   **Métodos auxiliares de matemática:**
    
    -   **Math.round, Math.floor, Math.ceil, Math.random**
        
        ```javascript
          Math.round(2.5); // 3
          Math.floor(2.4); // 2
          Math.ceil(2.4); // 3
          Math.random(); // 0.565262543048269 - random no. between 0 and 1
        
        ```
  
    
-   Exemplo
    
    0.1 + 0.2 // 0.30000000000000004
    

Porque? [Explicação](http://0.30000000000000004.com/)

Portanto, ao trabalhar com dinheiro, não os guarde como dólares e centavos. Armazene todo o dinheiro em centavos, pois você não terá que lidar com frações apenas em números inteiros. Quando precisar exibir ao usuário, basta convertê-lo novamente.

-   **Tipos Infinity e negativos:**

`typeof Infinity; // number`

`typeof -Infinity; // number`

-   **Não é numero -> Not a Number (NaN):**

`10 / 'umastring' // NaN`

`typeof NaN // number`