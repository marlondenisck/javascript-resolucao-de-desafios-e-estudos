function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');

  var data = new Date();
  var hora = data.getHours();
 
  msg.innerHTML = `Agora são ${hora} horas.`

  if(hora >= 0 && hora < 12) {
    img.src = "/assets/manha.jpg";
    document.body.style.background = '#feedc3';
  } else if(hora >= 12 && hora <= 18) {
    img.src = "/assets/tarde.jpg"
    document.body.style.background = '#9e97ae';
  } else {
    img.src = "/assets/noite.jpg";
    document.body.style.background = '#27435c';
  }
}
