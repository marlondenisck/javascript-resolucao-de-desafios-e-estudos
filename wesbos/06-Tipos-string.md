### String

-   Usado para guardar texto.
    
-   3 maneiras de criar strings:
    
    1.  Usando aspas simples:
        
        `const name = 'Marlon';`
        
    2.  Usando aspas duplas:
        
        `const nickname = "marlonauthority";`
        
    3.  Usando crases:
        
        ```javascript
         	const favorite_sport = `Skateboarding`;
        
        ```
    
-   **String concatenação e interpolação**
    
    -   '+' é usado para **concatenação**.
    -   **concatenação**: significa "juntar" dois ou mais textos.
    -   **interpolação**: quando você põe uma variável dentro de uma string.

    -   Exemplo 1:
    
    `const name = 'Marlon';`
    
    `const hello = 'Olá meu nome é ' + name + '. Prazer em lhe conhecer.'`
    
    
    -   Exemplo 2:
        
       ` 1+1 // 2`

	 `'1'+'1' // 11 `

	`1 + '1' // 11`

        
    -   Exemplo 3:
         ```javascript

        const name = 'Marlon';

        const hello = `Olá meu nome é ${name}. Prazer em lhe conhecer. Eu tenho ${27+1} de idade.`

        ```
        
    -   Da mesma forma pode ser usando no HTML:
        
        ```javascript
          const html = `
          	<div>
          		<h2>Olá pessoal! me chamo ${name}.</h2>
          	</div>
          `;
        ```