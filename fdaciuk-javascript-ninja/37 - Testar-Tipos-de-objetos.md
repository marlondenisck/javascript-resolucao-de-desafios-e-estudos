Usar o typeof só possível em tipos primitivos.
E se quiser-mos saber em objetos.


```javascript
  function is(obj) {
    return Object.prototype.toString.call(obj);
  }


  function isArray(obj) {
    return is(obj) === ['Object Array'];
  }

  console.log(isArray([1, 2, 3]));



  function isObject(obj) {
    return is(obj) === ['Object Object'];
  }

  console.log(isObject({prop1: 1, prop2: 2}));

  function isFunction(obj) {
    return is(obj) === ['Object Function'];
  }

   console.log(isFunction(function() {})));

```