/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

// 1 selecionar o form
const form = document.querySelector('form')

// 2 Array com as repostas
const correctAnswers = ['C', 'A', 'B', 'B']

// 3.5 funcao para criar e mostrar um h2 com o resultado
const renderScore = (score) => {
  const h2 = document.querySelector('h2')
  const scoreTitle = document.createElement('h3')
  scoreTitle.setAttribute('class', 'bg-success text-light')

  const singular = 'questão'
  const plural = 'questões'
  if(score === 1) { 
    scoreTitle.textContent = `Você acertou ${score} ${singular} 😄`
  } else {
    scoreTitle.textContent = `Você acertou ${score} ${plural} 😄`
  }
  
  h2.insertAdjacentElement('afterend', scoreTitle)
}

// 3 Event listener
form.addEventListener('submit', event => {
  // 3.1 impedir carregamento da pagina
  event.preventDefault()

  // 3.2 pegar valores dos inputs
  // console.log(form.inputQuestion1.value)
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  // 3.4 criar um score
  let score = 0

  // 3.5 Percorrer o array de respostas
  userAnswers.forEach((item, index) => {
    // 3.5.1 verificar se o item atual esta presente no array de respostas corretas
    if(item === correctAnswers[index]) {
      // 3.5.2 Mostrar a pontuacao
      score += 1
    }
  })

  // 3.5 Renderizar um h2 abaixo do titulo com a pontuacao
  renderScore(score)
  
})