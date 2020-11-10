O objeto `arguments` é como um objeto Array correspondendo aos argumentos passados para uma função.

```javascript
  function exemplo() {
    return arguments;
  }
```

Chamando a função acima repassando varios argumentos como parâmetro.

```javascript
 console.log(exemplo("marlon", "carro", 18));

 // retorna
 [Arguments] { '0': 'marlon', '1': 'carro', '2': 18 }
```
