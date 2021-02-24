const past = new Date('Jan 1 2021 0:00:00')
const present = new Date()
// console.log(present.getTime(), past.getTime())

// verificar a difereca entre as duas timestamps
const difference =  present.getTime() - past.getTime()
console.log(difference)

// pegar os segundos 1 milisegundo = 1000 por isso dividimos, Math.round arrendondamos
const seconds = Math.round(difference / 1000)
console.log({ seconds })

// converter segundos em minutus
const minutes = Math.round(seconds / 60)
console.log({ minutes })

// converter minutos em horas
const hours = Math.round(minutes / 60)
console.log({ hours })


// converter horas em dias
const days = Math.round(hours / 24)
console.log({ days })


console.log(`Escrito há ${days} dias`)


// converter em uma data a partir de um timestamp
const timestamp = 1675938474990
console.log(new Date(timestamp))
 