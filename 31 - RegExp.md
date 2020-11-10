## Expressões regulares 
São padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos.

Há duas maneiras de construir uma expressão regular:

1. Usando uma expressão literal, que consiste em um padrão fechado entre barras, como o exemplo a seguir:
```javscript
const regex = /m/;
// m sendo o caractere a ser buscado
```

As expressões regulares na forma literal são compiladas quando o script é carregado. Esta forma de construção possui melhor performace quando a expressão regular utilizada é uma constante, ou seja, não muda durante a execução.

2. Ou chamando o `construtor do objeto RegExp`:
```javscript
let re = new RegExp("m");
```
Usando o construtor, a compilação da expressão regular é realizada em tempo de execução. Use o construtor quando souber que o padrão da expressão regular irá mudar ou quando o padrão for desconhecido, oriundo de outra fonte, uma entrada de usuário por exemplo.


### Flags 
Pode-se passar "flags" em uma regex a fim de adicionar algumas condições.

- `g` 

A flag global ira buscar match em toda a string

- `i`

A flag ignore case ira descartar case sentive da string

- `m` 
A flag multiline tentara dar match em linhas


```javscript
const regex = /m/gi;
```
- busca m de forma global ignorando maiuscula e minuscula da string


### Termos
- `\w`: caracteres alfanuméricos e  _

- `\d`: números (digitos)

- `[]` classe  de caracteres (listas)

- `()` agrupamento de caracteres

- `\s` espaços em branco

- `\n` quebra linha

- `\t` tabulação (tab)

- `.` representa qualquer caractere (exceto quebra de linha)

- `^` inicio de uma string (fora de uma lista)

- `$` fim de string



### Negação

- `[^abc]` O match deve ser feito com qualquer item, exceto com os da lista

- `\W` Qualquer caractere, execeto os alfanumericos

- `\D` Qualquer caractere, execeto os numeros

- `\S` Qualquer caractere, execeto espaços em branco


### Repetidores

- `{n, x}` **intervalo**: item anterior por `n` vezes, e no maximo `x` vezes

- `{n, }` **intervalo aberto**: item anterior `n` ou mais vezes

- `{n}` exatamente `n` vezes

- `?` **opcionial** zero ou uma ocorrência do item anterior

- `+` uma ou mais ocorrencias do item anterior

- `*` zero ou mais ocorrencias do item anterior


### Metodos
- O método `match()` recupera as correspondências ao testar uma string com uma expressão regular.

- O método `replace()` retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto. 

- O método `split()` divide um objeto String em um array de strings ao separar a string em substrings.

- O método `search()` executa uma busca de uma expressão regular neste objeto  String.


### Construtor RegExp()
O construtor RegExp cria um objeto de expressão regular para combinar o texto com um padrão.

```javascript
  var regex = new RegExp('string');
  
  console.log(regex);
  //saida sera uma regex ->  /string/
```