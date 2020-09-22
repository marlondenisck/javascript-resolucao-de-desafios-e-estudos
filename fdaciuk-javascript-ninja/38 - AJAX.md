## AJAX
AJAX é o acrônimo para JavaScript assíncrono + XML.

As aplicações web que a utilizam são capazes de fazer rapidamente atualizações incrementais para a interface do usuário sem recarregar a página inteira do navegador. Isso torna a aplicação mais rápida e sensível às ações do usuário.

Embora a letra X em AJAX corresponda ao XML, atualmente o JSON é mais utilizado que o XML devido às suas vantagens, como ser mais leve e ser parte do JavaScript. Ambos (JSON e XML) são utilizados ​​para obter informações do pacote no modelo AJAX.

### Como funciona
```javascript
  //1- Iniciar uma nova instancia objeto
  var ajax = new XMLHttpRequest();

  //2- Abrir a conexao // protocolos mais usado get e post
  ajax.open(protocol, url);

  //3- comunicar os dados
  ajax.send(data);
```

### HTTP Status
```ajax.status``` mostra os status http (200, 404, 500)...


### Manipulando
Com o evento `onreadystatechange` verifica quando o estado foi alterado.

O evento `readyState` mostra qual ponto da requisição se encontra:
```
0 - Não enviado.

1 - Conexão aberta/iniciada.

2 - Headers recebidos. 

3 - Loading do body.

4 - Concluído.
```

### Resposta
Quando a requisição termina de forma positiva o `ajax.readystate` é igual a `4`e o `ajax.status` é igual a `200`.

```javascript
  ajax.responseText
  // Traz a resposta em formato string
```


### Tratando erros
Use a instrução `throw` para lançar uma exceção.
E as declarações `try` `catch`para marcarem um bloco de declarações para testar.

```javascript 
  // ...
  try {
    throw new Error('Mensagem de erro.');
  } 
  catch(err) {
    console.log('qual erro aconteceu?', err);
   }
```
