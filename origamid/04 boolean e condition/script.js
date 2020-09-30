// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28;
var idadePrimo = 32;

if(minhaIdade > idadePrimo) {
 console.log('É maior')
} else if (minhaIdade === idadePrimo) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(true, !!expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Marlon'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china) {
  console.log('Brasil é maior');
} else {
  console.log('china é maior');
}


// O que irá aparecer no console?
if( ('Gato' === 'gato') && (5 > 2) ) {
  console.log('Vardadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if( ('Gato' === 'gato') || (5 > 2) ) {
    console.log('Gato' && 'Cão');
  } else {
    console.log('Falso');
} 