// const user = {
//   name: 'Fake Name',
//   email: 'fake@email.com',
//   login: () => 'O uruário fez login',
//   logout: () => 'O usuário deslogou'
// }

// const user2 = {
//   ...user,
//   name: 'Other Name',
//   email: 'other@email.com',
// }

// const user3 = new User('name3', 'email3@email.com')

// console.log(user, user2)


// -------------------------

class User {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

// a palavra reservada "new" cria um novo objeto e a Classe User executa o constructor da classe
// o this referencia o novo objeto criado
const user = new User('User 1', 'email1@email')
const user2 = new User('User 2', 'email2@email')

console.log(user, user2)