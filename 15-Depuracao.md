## Depuração

Existem 2 aspectos na depuração:

1.  Ferramentas de depuração
2.  Mindset para lidar com erros/bugs etc.

### Debugging Tools

  1- **Console:**

  -   `console.log` - normal logging.
      
  -   `console.info` - similar ao `console.log`.
      
  -   `console.error` - usado apra expressar saidas de erro (altera a aparência dos logs no console e fornece um rastreamento do erro).
      
  -   `console.warn` - similar ao `console.error` mas usado para avisos (apenas diferença da interface do usuário que a anterior).
      
  -   `console.table` - Útil quando temposs um array de objetos pois formata em tabela.

    ```javascript    
      const people = [
      { name: "Wes", cool: true, country: "Canada" },
      { name: "Scott", cool: true, country: "Merica" },
      { name: "Snickers", cool: false, country: "Dog Country" }
      ];

      people.forEach((person, index) => {
      console.table(person.name);
      });         
    ```
          
  -   `console.count` - conta quantas vezes, digamos, uma função é executada
      

    
2.  **Rastreamento:** Diz qual função chamou a função, e chamou qual função e assim por diante..
    
    Exemplo:
    
    ```javascript
     function nomeDeDoutor(nome) {
       return `Dr. ${nome}`;
     }
     
     function comprimentar(nome) {
       naoExiste(); // causa um erro
       return `Olá ${nome}`;
     }
     
     function iniciar() {
       const nome = nomeDeDoutor(comprimentar('Marlon'));
       console.log(nome);
     }
    
    ```
    
    Neste exemplo acima, a função `naoExiste()` não existe, o que causará um erro quando executamos a função `iniciar()`:
    
    `iniciar()`
    
    Error:
    
    ```javascript
     debugging.js:32 Uncaught ReferenceError: naoExiste is not defined
         at comprimentar (debugging.js:32)
         at iniciar (debugging.js:37)
         at <anonymous>:1:1
    
    ```
    
    O erro diz que esse erro ocorreu na linha 32 na função comprimentar. O `comprimentar` foi chamado por` iniciar` na linha 37. O `anonymous 1:1` vem quando o rodamos em nosso console, caso contrário, ele mostraria a linha no. de onde teríamos chamado a função `iniciar` no código.
    
    3.  **Agarrando Elements**
    
    Se selecionarmos algo usando a guia _elements_ no dev tools, e depois ir para a tab _console_, entao rodamos  `$0`, e retornamrmos o item selecionado.
    
    `$0`: O elemento selecionado
    
    `$1` : O último elemento selecionado
    
    `$2` : O penultimos elemento selecionado
    
    e assim por diante...
    Também temos `$` e `$$` no console.
    
    Eles sao selecionadores de elementos:

    Ex: `$('p')` = `document.querySelector('p')` : seleciona o primeiro elemento p
    
    `$$('p')` = `document.querySelectorAll('p')` : seleciona todos os elementos que sao p
        
    
    4.  **Breakpoints:**
    
    Para interromper a execução do javascript em determinada linha de código, escrevemos `debugger;`. A pausa do javascript só funciona quando os devtools são abertos. Isso nos ajuda a observar o JavaScript naquele exato momento.
    
    Nos mostra a pilha de chamadas, valores de variáveis ​​locais naquele momento e outras coisas úteis.
    
    
    5.  **Requests pela rede:**
    
    Dentro de Dev Tools voce pode ver a aba _Network_.
    
    