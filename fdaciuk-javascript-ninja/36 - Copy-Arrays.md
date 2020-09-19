É possível copiar arrays utilizando do método `slice` sem passar parametro.
Também é possivel utilizar o método `map`.
## Array normal

```javascript
var array = [1, 2, 3, 4, 5];
var arrayCopy = array.slice();
```

## Array Like

```javascript
var $nodeList = document.querySelectorAll('div');
var $nodeListCopy = Array.prototype.slice.call($nodeList);
```