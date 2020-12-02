// a palavra-chave this

let user = {
  name: 'João',
  age: '31',
  email:'email@email.com',
  city:'São Paulo',
  blogPosts: ['First post', 'Hello World'],
  
  // forma normal de criar método
  login: function() {
    console.log('Usuário logado!')
  },

  // Atalho para criar método
  logout() {
    console.log('Usuário deslogado!')
  },

  logBlogPosts: function() {
    // quando cria-se um método com a conotacao function() o
    // this aqui é o proprio objeto
    // se criar o método com arrow function () => {}
    // o this sera o window

    // console.log(this.blogPosts)
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach((post) => {
      console.log(post)
    })
  }
}

// user.login()
// user.logout()
user.logBlogPosts()