## Do while
A declaração `do while` cria um laço que executa uma declaração até que o teste da condição for falsa (false). 
A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez, ou seja, 
enquanto no `while` a condição é testada no inico de sua instrução o do while testa no seu final.


#### Syntax

```javascript
do
   declarações
while (condição);

```


- `declarações`
    A declaração é executada pelo menos uma vez e re-executada cada vez que a condição (condition) for avaliada como verdadeira (true). Para executar múltiplas declarações dentro do laço, use um block declaração ({ ... }) ao grupo dessas declarações.

- `condição`
    Uma expressão é validade depois de cada passagem pelo laço. Se a condição (condition) é avaliada como verdadeira (true) o bloco de código é executado novamente. Quando a condição (condition) é avaliada como falsa (false),  o controle passa para a instrução seguinte ao laço do...while. 
    
    
```javascript
   var counter = 1; 
   do {
      console.log(counter ++);
    } while(counter < 10);


```

---

## For in
O laço `for in` interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. 
O laço pode ser executado para cada propriedade distinta do objeto.

#### Syntax
```javascript
for (variavel in objeto) {
    ...
 }
```


- `variavel`
    Uma propriedade diferente do objeto é atribuida em cada iteração.

- `objeto`
    Objeto com as propriedades enumeradas. 
    
    
 ```javascript
  var carro = {
    marca: 'Hyunday',
    modelo: 'Lancer evo x',
    ano: '2011'
  }
 
   for(prop in carro) {
     console.log(prop)
    }
    // Retorna as propriedades do objeto
    marca
    modelo
    ano
 ```
 
Utilizando `in` pode-se testar equivalente booleano da prop no objeto, ou seja, da pra verificar se "tal" propriedade existe dentro do objeto;
```javascript
  console.log('marca' in carro);
  true
```

Caso queira usar o for in para retornar os valores das propriedades utilize:
    
 ```javascript
   for(prop in carro) {
     console.log(carro[prop])
    }
    // Retorna os values
    Hyunday
    Lancer evo x
    2011

 ```







