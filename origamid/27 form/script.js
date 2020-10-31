const contato = document.querySelector('form');

const dados = {};

function handleKey(event) {
  dados[event.target.name] = event.target.value;
  //document.body.style.backgroundColor = event.target.value; 
  console.log(dados);
}


contato.addEventListener('change', handleKey)