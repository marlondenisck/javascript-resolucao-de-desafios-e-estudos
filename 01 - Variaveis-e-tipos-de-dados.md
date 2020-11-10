## O que é variável? 
- `Adjetivo`: Que pode variar; que se altera, muda; mutável: personalidade variável.

Em javascript declaramos variáveis com a palavra reservada da linguagem chamada **let** e também a **const**. Obs: No javascript antigo usa-se **var**.

As instruções terminam com ponto e virgula, mas é `opcional`, por que existe `ASI` (Automatic Semicolon Insercion).

### Declarando uma variável
```javascript
    let meuNome = 'Marlon';
```
## Identificadores
Todas as variáveis devem ser identificadas com nomes exclusivos que são chamados de identificadores.
Os identificadores podem ser nomes abreviados ou nomes mais descritivos (idade, soma, totalVolume).

Mas existem regras para a declaração de variáveis:
- Os nomes podem conter letras, dígitos, sublinhados e cifrões.
- Os nomes devem começar com uma letra.
- Os nomes também podem começar com `$` e `_`.
- Os nomes diferenciam maiúsculas de minúsculas.
- Palavras reservadas (como palavras-chave JavaScript) não podem ser usadas como nomes.

## Estrutura de dados e tipos
O mais comuns de tipos primitivo são:
  - `Boolean` - true e false.
  - `null` - Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.
  - `undefined` - Uma propriedade superior cujo valor é indefinido (Quando declarar uma variável sem valor, o javascript atruibuirá undefined a ela).
  - `Number` - 1, 2, 3, -10, 4,2.
  - `String` - "Marlon".
