let inicio = document.getElementById('inicio'); 
let fim = document.getElementById('fim');
let passo = document.getElementById('passo'); 
let res = document.getElementById('res'); 

function contar() {
  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar.'
    // alert('[ERROR] Preencha os campos')
  } else {
    res.innerHTML = 'Contando: '
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if(p <= 0) {
      return;
    }

    for (var c = 1; c <= f; c += p ) {
      res.innerHTML += `${c} \u{1f449} `
    }
  }

}