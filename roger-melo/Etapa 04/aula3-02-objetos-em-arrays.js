// objeto em arrays
let user = {
  name: 'João',
  age: '31',
  email:'email@email.com',
  city:'São Paulo',
  blogPosts: [
    { title: 'First post', likes: 30},
    { title: 'Hello World', likes: 40}
  ],
  login: function() {
    console.log('Usuário logado!')
  },
  logout() {
    console.log('Usuário deslogado!')
  },
  logBlogPosts: function() {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach((post) => {
      console.log(post.title, post.likes)
    })
  }
}


user.logBlogPosts()