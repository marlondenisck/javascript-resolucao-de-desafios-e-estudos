Normalmente `this` é automaticamente atribuído, mas você pode alterar seu valor por várias razões(reaproveitamento de código, por exemplo), conforme veremos nos exemplos a seguir.

Existem 3 métodos de função capazes de alterar o valor this: `Call`, `Apply` e `Bind`. Por método de função queremos dizer que toda função em JavaScript possui nativamente implementada essas 3 propriedades.

## Call
Este é o primeiro método de funções capaz de alterar o valor this. O primeiro parâmetro que recebe é o valor de this que será atribuído à função. Os demais parâmetros são os parâmetros da função que invoca o método Call.


```javascript
  function sayThis(n1,n2) {  
      console.log(this * n1 * n2);
  }
  // 2 é this, n1 e n2 são 3
  sayThis.call(2, 3, 3) // 18  
  // 1 é this, n1 e n2 são 3
  sayThis.call(1, 3, 3) // 9  
```

A lógica do funcionamento está clara acima, mas o legal mesmo é utilizá-la para reaproveitamento de código. Vejamos outro exemplo bem simples que dará essa idéia:

```javascript
  function sayAnyCharacter() {  
      console.log(this.name + ": " + this.character);
  };
  var actor1 = {  
      name:"Clint Eastwood",
      character: "The Good"
  };
  var actor2 = {  
      name:"Lee Van Cleef",
      character: "The Bad"
  };
  // Clint Eastwood: The Good
  sayAnyCharacter.call(actor1);  
  // Lee Van Cleef: The Bad
  sayAnyCharacter.call(actor2);  
```


````
Estrutura de dados são dados sem comportamento.
Função é comportamento sem dados.
Objetos são dados com comportamento(métodos).
````


---

## Apply
Apply é o segundo método de funções capaz de alterar o valor this. Ele funciona exatamente como o método Call, porém seu segundo parâmetro recebe um Array ou Array-like dos parâmetros da função. 

```javascript
  function sayThis(n1,n2) {  
      console.log(this * n1 * n2);
  }
  // 2 é this, n1 e n2 são 3
  sayThis.apply(2, [3, 3]) // 18  
  // 1 é this, n1 e n2 são 3
  sayThis.apply(1, [3, 3]) // 9  
```