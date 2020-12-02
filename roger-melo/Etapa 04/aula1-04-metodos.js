// adicionando metodos
let user = {
  name: 'João',
  age: 31,
  email: 'jaocardoso@email.com',
  city: 'São Paulo',
  blogPosts: ['4 receitas', 'Hello World'],
  login: function() {
    console.log('Usuário logado')
  },
  logout: function() {
    console.log('Usuário deslogado')
  }
}

user.login()
user.logout()

