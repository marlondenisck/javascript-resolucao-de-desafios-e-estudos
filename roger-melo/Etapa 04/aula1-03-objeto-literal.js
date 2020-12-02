// criando objeto literal
// metodos sao funcoes, dados sao propriedades com chave:valor

let user = {
  name: 'João',
  age: 31,
  email: 'jaocardoso@email.com',
  city: 'São Paulo',
  blogPosts: ['4 receitas', 'Hello World']
}

console.log(user.age)

user.age = 32

console.log(user.age)

console.log(user['name'])

user['name'] = 'José'

console.log(user.name)


const key = 'email'
console.log(user[key])

console.log(typeof user)