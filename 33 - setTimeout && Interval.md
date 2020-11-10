Quando executamos um método no javascript como por exemplo o loop `while` com uma uma grande quantidade de processamento a página(browser) não respoderá até que a instrução esteja terminada. 

- Neste exemplo esse tipo de comportamento chamamos de `Sincrono`.

Existem outros métodos em Javscript que tem um comportamento diferente, eles entram em loop mas  alocam uma nova thread no processador e assim permitem a continuação do carregamento da pagína.

- Chamamos esse comportamento de `Assincronísmo`.

## Métodos Assincronos

### setTimeout()
Executa um bloco específico uma vez depois de um determinado tempo.

No exemplo abaixo a cada 1 segundo imprimirá o console log.
```javascript
  var olaMundo = setTimeout(function() {
    alert('Hello World!');
  }, 1000)
```

### setInterval()
Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.


### clearTimeout()
Se um timeout foi criado, você pode cancelá-lo antes que o tempo especificado tenha passado chamando clearTimeout(), e como parametro a variavel refenrente ao settimetout