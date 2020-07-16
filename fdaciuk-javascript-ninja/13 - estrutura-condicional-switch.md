A condicional `switch` avalia uma expressão, combinando o valor da expressão para um cláusula `case`, e executa as instruções  associadas ao case.


### Sintaxe
```javascript
  switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
}
```

### Exemplo
```javascript
  var animal = 'Girafa';
  
  switch (animal) {
      case 'Cachorro':
        console.log('Animal é cachorro');
        break;
      case 'Girafa':
        console.log('Encontrado! o animal é a girafa');
        break;
      default:
          alert('Nenhum animal encontrado');
  }
  
```
