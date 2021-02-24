// Datas em javascript são um tipo de objeto
// objetos por sua vez são do tipo referencia

// Date constructor - MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const present = new Date()

console.log('getFullYear', present.getFullYear()) // ano
console.log('getMounth', present.getMonth()) // o numero do mes (zero based)
console.log('getDate', present.getDate()) // dia do mes
console.log('getData', present.getDay()) // dia da semana (zero based) [0 - domingo, 1- segunda]

console.log('getHours', present.getHours()) // horas
console.log('getMinutes', present.getMinutes()) // minutos
console.log('getSeconds', present.getSeconds()) // segundos


// timestaps é a representacao em milisegundos desde de 1 janeiro de 1970 ate agora
console.log('timestamp', present.getTime()) // milisegundos

console.log('fullTime', present) // object
console.log('toDateString:', present.toDateString()) // string
console.log('toTimeString:', present.toTimeString()) // string
console.log('toLocaleString:', present.toLocaleString()) // padrao americano string