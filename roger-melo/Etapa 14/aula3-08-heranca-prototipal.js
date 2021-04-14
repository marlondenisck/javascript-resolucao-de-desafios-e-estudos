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

function TeacherAssistant (name, email) {
  Student.call(this, name, email)
  this.scheduleWeekPosts = this.scheduleWeekPosts
}

TeacherAssistant.prototype = Object.create(Student.prototype)

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
  return `${this.name} deu uma medalha para ${name}`
}

const a = new TeacherAssistant('aluno assistente', 'email@email.com')
const b = new Student('aluno normal', 'email@email.com', false)

console.log(a, b)