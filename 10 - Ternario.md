O operador condicional `ternário` é o único operador JavaScript que possui três operandos. 
Este operador é frequentemente usado como um atalho para a instrução if.

### Sintaxe
```javascript
  condition ? expression1 : expression2;
```
  - Se condition for true, o operador retornará o valor de `expression1`; se não, ele retorna o valor de `expression2`.
  
  
## Exemplo
```javascript
  var n1 = 1;
  var ternario = n1 === 1 ? 'Sim' : 'Nao';
  
  // Chamando a variavel ela ja retorna a condição
  ternario
  'Sim'

```
 
 Viu? É bem parecido com a estrutura IF, porém o código fica mais legível.
