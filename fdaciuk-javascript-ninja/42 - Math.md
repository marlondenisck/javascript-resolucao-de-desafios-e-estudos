Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.

Ao contrário de outros objetos globais, Math não é um construtor. Todas as propriedades e métodos de Math são estáticos. Você pode referenciar a constante PI como Math.PI e você pode chamar a função de seno como Math.sin(x), onde x  é o argumento do método. Constantes são definidas com a precisão total de números reais em JavaScript.


## Exemplo
```javascript
  Math.random();
  // gera sequencia numeros
  // 0.5824683890332182
  // 0.15599339785628574
  // 0.19135110741912686

  /* Para gerar números aleatórios na casa do inteiros, devemos multiplicar o método por um inteiro qualquer:
  */
  Math.random() * 10
  // 3.3667982332519086

  /* Agora devemos utilizar a função Math.floor() para retirar a parte flutuante (números decimais).
  */
  // O código acima irá gerar números aleatórios no seguinte “range” 0, 1, 2, 3, 4, 5, 6, 7, 8, e 9.
  Math.floor(Math.random() * 10)
```

## Referencia
[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)