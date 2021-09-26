const nome = "Marlon";
const peso = 62;
const altura = 1.74;
const sexo = 'M';
const contribuicao = 60;
const idade = 90;

const imc = () => {
  const result = peso / (altura * altura)
  if (result >= 30) {
    return `${nome} você está acima do peso;`
  } else if (result <= 29.9) {
    return `${nome} você não está acima do peso;`
  }
  return;
}

console.log(imc())

const aposentadoria = () => {
  const calculoContribuicao = idade + contribuicao;
  const aposentadoriaMasculino = sexo === 'M' && contribuicao >= 35 && calculoContribuicao >= 95;
  const aposentadoriaFeminino = sexo === 'F' && contribuicao >= 30 && calculoContribuicao >= 85;

  const mensagemNaoPodeAposentar = nome => `${nome} você ainda não pode se aposentar!`;
  const mensagemPodeAposentar = nome => `${nome} você pode se aposentar!`;

  if ( aposentadoriaMasculino || aposentadoriaFeminino) {
    return mensagemPodeAposentar(nome)
  } else {
    return mensagemNaoPodeAposentar(nome)
  }
}

console.log(aposentadoria())