class User {
  #counter = 0

  constructor(name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    return ++this.#counter
  }
}

const createUser = (name, email) => {
  let counter = 0

  return {
    name, 
    email,
    incrementCounter: () => ++counter // <- Closure, por que o metodo esta no escopo lexico, escopo lexico é aquilo que esta dentro do bloco da arrow function
 }
}

const user =  new User ('Marlon', 'user@email')
const user2 = createUser ('Roger', 'user@email')

console.log(user, user2)
console.log(user.incrementCounter(), user2.incrementCounter())
console.log(user, user2)



// class a {
//   first() {
//     return 1
//   }
//   second() {
//     return 'nãããão!!'
//   }
// }

// class b extends a {
//   third () {
//     return 3
//   }
// }
//
//const obj = new b()


const a = {
  fisrt() {
    return 1
  }
}

const b = {
  second() {
    return 'nãããão!!'
  }
}

const c = {
  third() {
    return 3
  }
}

const obj = {
  ...a,
  ...c
}

console.log(obj)