const present = new Date()

console.log(dateFns.isToday(present)) // bolean sobre a data de hoje

console.log(dateFns.format(present, 'MMMM')) //  nome do mes
console.log(dateFns.format(present, 'dddd')) //  dia da semana 
console.log(dateFns.format(present, 'Do')) //  dia do mes
console.log(dateFns.format(present, 'DD/MM/YYYY')) //  dia/mes/ano



// comparacao de datas
const past = new Date('Feb 25 2021 15:00:00')

console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))
