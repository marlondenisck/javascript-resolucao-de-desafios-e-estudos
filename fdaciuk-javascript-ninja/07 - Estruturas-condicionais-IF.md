## IF (SE)
Utilizamos para verificar uma condição e definir se algo deve ou não acontecer.
Um bom exemplo disso, e que não tem nada a ver com programação, é a linguagem que utilizamos para nos comunicar, repare:

  - Se o sol sair hoje, vou nadar.

Temos uma condição (se o sol sair hoje) para executar uma ação (vou nadar) dependendo do resultado dessa condição. Se verdadeira, a ação é executada.
```javascript
  if ( sol ) {
    alert('Vou nadar!');
  }
```

Exemplificando o código acima:
```javascript
  // Variável booleana verdadeira
  var sol = true;

  // Condição
  if ( sol ) {
    // Ação
    alert('Vou nadar!');
  }
```

## ELSE (OU)
Para resultados contrários.
```javascript
  // Variável booleana para FALSO
  var sol = false;

  // Condição
  if ( sol ) {
    // Ação
    alert('Vou nadar!');
  } else {
    alert('Sem sol hoje, vou ficar em casa. 😪');
  }
```
## ELSE IF
Também podemos encadear mais condições com `else if(condição) {retorno}`.
```javascript
  // Variáveis booleanas
  var madrugada = false;
  var cedo = true;
  var tarde = false;

  // Condição
  if ( madrugada ) {
    alert('Vou ler');
  } else if ( cedo ) {
    alert('Vou estudar');
  } else {
    alert('Vou assistir filme');
  }
```
