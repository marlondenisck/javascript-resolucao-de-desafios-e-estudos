## Operadores Aritméticos
Possuem valores numéricos (literais ou variáveis) como seus operadores e retornam um valor numérico único. 
Os operadores aritméticos padrões são:
  - adição `+` 
  - subtração `-` 
  - multiplicação `*`
  - divisão `/`
  
Estes operadores podem ser usados em expressões matematicas.
```javascript
    var n1 = 10;
    var n2 = 2;
    
    var soma = n1 + n2;
    12
    
    var subtracao = n1 - n2;
    8
    
```

### Operadores abreviados
  - `++`
  - `--`
  
Basicamente usado para adicionar mais um ao valor da variavel.

```javascript
   //Declarei uma variável que soma 2 valores..
   var soma = 10 + 10;
   20
   
   // Com o valor da primeira variável é somado mais 1;
   soma = soma + 1;
   21
   
   // Mesma coisa que a declaração acima só que de forma abreviada, pega o valor da var e adiciona 1.
   soma ++;
   22
   
   // Da pra diminuir também..
   soma --;
   21
    
```

Pode-se usar também da mesma lógica para os aritiméticos
  - `+=`
```javascript
  soma = 10 + 10;
  20
  
  soma = soma + 21;
  41
  
  soma += 21
  62
```

- `-=`
```javascript
  sub = 110 - 10;
  100
  
  sub = sub - 1;
  99
  
  sub -= 10;
  89
```

  - `*=`
```javascript
  mult = 2 * 2;
  4
  
  mult = mult * 2;
  8
  
  mult *= 10
  80
```

  - `/=`
```javascript
  div = 140 / 2;
  70
  
  div = div / 4;
  17.5
  
  div /= 2;
  8.75
```
