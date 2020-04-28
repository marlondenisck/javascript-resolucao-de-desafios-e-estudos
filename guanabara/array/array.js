let vec = [5, 7, 4, 9, 3];

console.log(vec)
console.log(`Adicionando um atributo de valor 2 fica:`);
vec.push(2);
console.log(vec)
console.log(`O vetor em ordem fica`);
vec.sort();
console.log(vec)
console.log(`O vetor neste momento tem ${vec.length} posicoes`)

// for(i = 0; i < vec.length; i++) {
//   console.log(`A posicao ${i} possui o valor de: ${vec[i]}`)
// }

for(i in vec) {
  console.log(`A posicao ${i} possui o valor de: ${vec[i]}`);
}

console.log('Procurando qual posicao encontra-se o numero 4: ')
let pos = vec.indexOf(4);
console.log(`Posicao ${pos}`)