(function(win, doc) {
  'use strict';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  // Selecionar elemento na DOM
  var $visor = doc.querySelector('[data-js="visor"]');
  var $clearButton = doc.querySelector('#clear');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operations"]');
  var $equalButton = doc.querySelector('#equal');
  
 
  /**************** Events ******************/
  
  // Passar por cada Button Number e adcionar Evento de click
  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false);
  });

  // Passar por cada Button Operation e adcionar Evento de click
  Array.prototype.forEach.call($buttonsOperations, function(operation) {
    operation.addEventListener('click', handleClickOperation, false);
  });

  // Evendo limpa tela
  $clearButton.addEventListener('click', handleClickClear, false);

  // Evento de = igualdade
  $equalButton.addEventListener('click', handleClickEqual, false);



  /**************** Functions ******************/

  // Function que atribui o value do button no visor
  function handleClickNumber() {
    // considera tudo que tem e atribui mais o valor atual
    $visor.value += this.value;
  }
  
  // Function operacao atual
  function handleClickOperation() {
    $visor.value = removeLastItemIsOperator($visor.value);
    // considera tudo que tem e atribui mais o valor atual
    $visor.value += this.value;
  }

  // Function para verficar se o ultimo item é operacao
  function isLastItemAnOperation(number) {
    var operations = ['+', '-', '/', 'x'];
    // split convertemos para array e pop para colocar no lastItem
    var lastItem = number.split('').pop();
    // some passa pelo array e compara para retornar true ou false
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  // Function para verificar item é operador
  function removeLastItemIsOperator(number) {
    // SE o ultimo item clicado é uma operação 
    if(isLastItemAnOperation(number)) {
     //atribui um novo valor removendo o ultimo elemento da lista
     return number.slice(0, -1);
   }
   return number;
 }

  // Function limpa tela
  function handleClickClear() {
    $visor.value = 0;
  }

  // Function de soma
  function handleClickEqual() {
    $visor.value = removeLastItemIsOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x/-]?/g);

    var result = allValues.reduce(function(acumulado, atual) {
      var firstValue = acumulado.slice(0, -1);
      var operator = acumulado.split('').pop();
      var lastValue = removeLastItemIsOperator(atual);
      var lastOperator = isLastItemAnOperation(atual) ? atual.split('').pop() : '';
    
      switch(operator) {
        case '+':
          return (Number(firstValue) + Number(lastValue)) + lastOperator;
        case '-':
          return (Number(firstValue) - Number(lastValue)) + lastOperator;
        case 'x':
          return (Number(firstValue) * Number(lastValue)) + lastOperator;
        case '/':
          return (Number(firstValue) / Number(lastValue)) + lastOperator;
      }
    });
    
    $visor.value = result;
  }


})(window, document);