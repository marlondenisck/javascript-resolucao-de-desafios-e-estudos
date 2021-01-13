// de forma similar ao map, porem é usado quando
// necessitar retornar somente alguns itens do array original

// Exemplo 1
const randomNumbers = [33, 2, 99, 1, 58, 10, 42]
// numeros maior que 37
const numbersGreaterThan37 =  randomNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)


// Exemplo 2
const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

// Retonar somente os users que tiverem premium true
// Note que o filter sempre traz como padrao o que for true, 
// o false ele descarta automaticamente
const usersPremium = users.filter(user => {
  return user.premium
})


console.log(usersPremium)