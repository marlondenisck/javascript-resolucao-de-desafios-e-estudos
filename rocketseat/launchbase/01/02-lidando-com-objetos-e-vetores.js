const rocketseat = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: "260"
  }
}

console.log(
  `A empresa ${rocketseat.nome} está localizada em ${rocketseat.endereco.rua}, ${rocketseat.endereco.numero}`
)

const programador = {
  nome: 'Marlon',
  idade: 18,
  tecnologias: [
    { 
      nome: 'JavaScript', 
      especialidade: 'Web/Mobile'
    }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
