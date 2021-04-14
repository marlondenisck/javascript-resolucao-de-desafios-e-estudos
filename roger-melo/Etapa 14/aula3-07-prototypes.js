function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function login() {
  return `${this.name} fez login`
}

Student.prototype.comment = function comment() {
  return `${this.name} comentou`
}

// quando ao declara um metodo e não usar o prototype automaticamente este metodo se torna estatico
Student.formatToSnakeCase =  function (aString) {
  return aString.toUpperCase().replaceAll(' ', '_')
}


// *****
// quando se usa classes ao declarar um metodo não é necessario criar o proto pq é automatico
class Student2 {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  // metodo prototype
  comment () {
    return `${this.name} comentou`
  }

  // metodo estatico 
  static formatToSnakeCase (aString) {
    return aString.toUpperCase().replaceAll(' ', '_')
  }
}



const rogerMelo = new Student('Roger Melo', 'roger@rogermelo.com')
const rogerMelo2 = new Student2('Roger Melo', 'roger@rogermelo.com')

console.log(rogerMelo)
console.log(rogerMelo2)

console.log(Student.formatToSnakeCase('string para o banco de dados'))
console.dir(Student)

console.log(Student2.formatToSnakeCase('string para o banco de dados 2'))
console.dir(Student2)

// funcao nomeada
console.log(Student.prototype.comment.name)