## Wrapper
Em javascript quando declaramos tipos primitvos por exemplo uma `string` e queremos saber seu tamanho utlizamos da palavra reservada `length`.
```javascript
  var nome = 'Marlon';
  nome.length;
  6
```

O que acontece por baixo dos panos é que o javascript cria um objeto que é chamado Wrapper.
Que na verdade fica assim:
```javascript
  var nome = new String('Marlon');
  nome.length;
  6
  
   typeof function(){}
  'function'
   
```


## Typeof
Para sabermos qual é o tipo de uma variável por exemplo utilizamos a palavra reservada `Typeof` que identifica e retorna seu tipo primitivo.
```javascript
   var n1 = 1;
   
   typeof n1
   'number'
   
```
#### Observação
Qualquer outro tipo diferente de function o typeof retorna `object`
```javascript
   typeof {}
   'object'
   
   typeof []
   'object'
   
   typeof null
   'object'
   // NUll retorna objeto? Sim foi um erro na implementação. 😅
   
```
