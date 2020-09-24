(function(DOM) {
    'use strict';
  
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

    // Module Pattern
    function app() {
      var $formCep = new DOM('[data-js="form-cep"]');
      var $inputCep = document.querySelector('[data-js="input-cep"]');
      var $address = document.querySelector('[data-js="address"]');
      var $bairro = document.querySelector('[data-js="bairro"]');
      var $estado = document.querySelector('[data-js="estado"]');
      var $cidade = document.querySelector('[data-js="cidade"]');
      var $cep = document.querySelector('[data-js="cep"]');
      var $status = document.querySelector('[data-js="status"]');
      var ajax = new XMLHttpRequest();
      $formCep.on('submit', handleSubmitFormCep);

      function handleSubmitFormCep(event) {
        event.preventDefault();
        var url = getUrlClean();
        ajax.open('GET', url);
        ajax.send();
        getMessages('loading');
        ajax.addEventListener('readystatechange', handleReadyStateChange);
      }
  
      function getUrlClean() {
        return replaceMessageCep('https://ws.apicep.com/cep/[CEP].json');
      };

      function clearCep() {
        return $inputCep.value.replace(/\D/g, '');
      };
  
      function handleReadyStateChange(){
        if(isRequestOk()) {
          getMessages('ok');
          fillCepFields();
        }
      };
  
      function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
      }
  
      function fillCepFields() {
        var data = parseData();
        if(!data) {
          getMessages('error');
          data = clearData();
        }
        $address.textContent = data.address;
        $bairro.textContent = data.district;
        $estado.textContent = data.state;
        $cidade.textContent = data.city;
        $cep.textContent = data.code;
      }
  
      function clearData() {
        return {
          address: '-',
          district: '-',
          state: '-',
          city: '-',
          code: '-'
        }
      }
  
      function parseData() {
        var result;
        try {
          result = JSON.parse(ajax.responseText);
        } catch (err) {
          result = null;
        }
        return result;
      };
      
      function getMessages(type) {
        var messages = {
          loading: replaceMessageCep('Buscando informações para o CEP [CEP]...'),
          ok: replaceMessageCep('Endereço referente ao CEP [CEP]:'),
          error: replaceMessageCep('Não encontramos o endereço para o CEP [CEP].'),
        }
        $status.textContent = messages[type];
      }
  
      function replaceMessageCep(message) {
        var cep = clearCep();
        return message.replace('[CEP]', cep)
      }

      return {
        // ...
        clearData: clearData,
        parseData: parseData,
        getMessages: getMessages,
        replaceMessageCep: replaceMessageCep
      }
    }
    window.app = app;
    app();

  })(window.DOM);