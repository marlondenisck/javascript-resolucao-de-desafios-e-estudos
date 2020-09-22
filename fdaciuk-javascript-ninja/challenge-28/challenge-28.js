(function() {
    'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };
  

  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.prototype.usString = function usString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]'
    || Object.prototype.toString.call(param) === '[object Undefined]' ;
  };

  //
  var $a = new DOM('[data-js="link"]');
  console.log($a);


  // FOR EACH
  $a.forEach(function(item) {
    console.log(item.firstChild.nodeValue);
  });

  // MAP
  var map = $a.map(function(item) {
    return item.getAttribute('data-js');
  });
  console.log(map);

  // Reduce
  var reduce = $a.reduce(function(acumulado, item, index) {
    return acumulado + ' ' + item.getAttribute('data-js') + index;
  }, 0);
  console.log(reduce);

  // isArray
  console.log($a.isArray([1, 2, 3]));

  // isNull
  console.log(DOM.isNull(null));
  // isNull -> undefined  
  console.log(DOM.isNull());

  /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */
    
    // Pegar os elementos html
    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = document.querySelector('[data-js="input-cep"]');
    var $address = document.querySelector('[data-js="address"]');
    var $bairro = document.querySelector('[data-js="bairro"]');
    var $estado = document.querySelector('[data-js="estado"]');
    var $cidade = document.querySelector('[data-js="cidade"]');
    var $cep = document.querySelector('[data-js="cep"]');
    var $status = document.querySelector('[data-js="status"]');

    // Adicionar evento ao clicar em enviar
    $formCep.on('submit', handleSubmitFormCep);

    // iniciar uma instancia ajax
    var ajax = new XMLHttpRequest();


    // funcao callback do evento handleSubmitFormCep
    function handleSubmitFormCep(event) {
      event.preventDefault();
      var url = getUrlClean();
      // abre a conexao
      ajax.open('GET', url);
      // envia
      ajax.send();
      //mostrar o status no html
      getMessages('loading');
      // atribui um evento escutador
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    // funcao limpa url
    function getUrlClean() {
      return replaceMessageCep('https://ws.apicep.com/cep/[CEP].json');
    };

    // formata o Cep
    function clearCep() {
      return $inputCep.value.replace(/\D/g, '');
    };

    // Evento para a resposta ajax do evento handleSubmitFormCep
    function handleReadyStateChange(){
      if(isRequestOk()) {
        getMessages('ok');
        // function para preencher 
        fillCepFields();
      }
    };

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCepFields() {
      // pega os dados vindo da api
      var data = parseData();
      // se der erro
      if(!data) {
        getMessages('error');
        data = clearData();
      }
      
      // insere no dom os dados atuais
      $address.textContent = data.address;
      $bairro.textContent = data.district;
      $estado.textContent = data.state;
      $cidade.textContent = data.city;
      $cep.textContent = data.code;
    }

    //
    function clearData() {
      return {
        address: '-',
        district: '-',
        state: '-',
        city: '-',
        code: '-'
      }
    }

    // function para realizar try catch
    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      } catch (err) {
        result = null;
      }
      return result;
    };
    

    // mostrar mensagens
    function getMessages(type) {
      var messages = {
        loading: replaceMessageCep('Buscando informações para o CEP [CEP]...'),
        ok: replaceMessageCep('Endereço referente ao CEP [CEP]:'),
        error: replaceMessageCep('Não encontramos o endereço para o CEP [CEP].'),
      }
      
      $status.textContent = messages[type];
    }

    // function para alterar mensagem de status
    function replaceMessageCep(message) {
      var cep = clearCep();
      return message.replace('[CEP]', cep)
    }

  })();