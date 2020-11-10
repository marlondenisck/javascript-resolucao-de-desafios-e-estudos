## O que é Hoisting
Hoisting (içamento, em português) é um termo que você não encontrará usado em nenhuma prosa de especificação normativa antes da especificação de idioma do `ECMAScript® 2015`. 
Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript. 
No entanto, o conceito pode ser um pouco confuso a princípio.

Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece.
Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código. - [Mozilla Dev](https://developer.mozilla.org/pt-BR/docs/Glossario/Hoisting).

A "grosso modo" podemos dizer então no que diz respeito a `functions` existe um `scope` e neste scope o Javascript "arruma" a hierarquia do seu código.

### Exemplos
Uma das vantagens do JavaScript em colocar declarações de função na memória antes de executar qualquer segmento de código é que ele permite que você use uma função antes de declara-la em seu código. Por exemplo:
```javascript
  function dogName(name) {
    console.log("O nome do meu cachorro é " + name);
  }

  dogName("Juca");
  O nome do meu cachorro é Juca
```


O trecho de código acima é como você escreveria o código para que ele funcionasse. Agora, vamos ver o que acontece quando chamamos a função antes de escrevê-la, ou seja invertendo:
```javascript
dogName("Juca");

  function dogName(name) {
    console.log("O nome do meu cachorro é " + name);
  }
  
  O nome do meu cachorro é Juca
```


Mesmo que chamemos a função em nosso código primeiro, antes que a função seja escrita, o código ainda funciona. 
Isto ocorre por conta de como a execução de contexto funciona em JavaScript.

Hoisting funciona bem com outros tipos de dados e variáveis. As variáveis podem ser inicializadas e usadas antes de serem declaradas.
