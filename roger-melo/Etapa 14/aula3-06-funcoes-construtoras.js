/* 
// Funcao construtora é exatamente a mesma coisa que a class abaixo
  function Student (name, email) {
    this.name = name
    this.email = email
    this.login = function() {
      return `${this.name} fez login`
    }
  }

*/


class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
  login () {
    console.log(`${this.name} fez login`)
    return this
  }

}


const rogerMelo = new Student('Roger Melo', 'roger@rogermelo.com')
const marlon = new Student('Marlon', 'fake@email.com')

console.log(rogerMelo, marlon.login())