let num = document.getElementById('numero');
let select =  document.getElementById('select');

function gerarTabuada() {

  if(num.value.length == 0) {
    alert('Por favor digite um numero');
  } else {
    let n = Number(num.value);
    let i = 1;

    select.innerHTML = '';

    while(i <= 10) {
      let item = document.createElement('option');
      item.text = `${n} X ${i} = ${n*i}`;
      item.value = `${i}`;

      select.appendChild(item);
      
      i++
    }
  }

}