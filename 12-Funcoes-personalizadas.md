## Funcoes personalizadas

-   Funções são **criadas e/ou definidas** para então serem **chamadas**.
    
-   Definindo uma função:
    
    ```javascript
     
      function soma() {
      	console.log('entrou aqui');
      }
    
    ```
    
-   Chamando a função:
    
    ```javascript
      
      soma(); // chamara a função soma (retorna undefined)
    
    ```
    
-   Variáveis ​​criadas dentro de uma função não estão disponíveis fora da função. por exemplo. `result` abaixo.
      
    ```javascript
      function soma() {
      	const result = 1 + 1;
      	return result; 
      }
      
      soma(); // 2
    
    ```
  