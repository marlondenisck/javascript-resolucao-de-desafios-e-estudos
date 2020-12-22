/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const form = document.querySelector('form')
const input = document.querySelector('#username')
const button = document.querySelector('button')

const testUsername = inputValue => /^[a-z-A-Z]{6,}$/.test(input.value)

const paragraphUsernameFeedback = document.createElement('p')
const paragraphSumitFeedback = document.createElement('p')

paragraphSumitFeedback.setAttribute('data-feedback', 'submit-feedback')

const invalidUsernameInfo = {
  paragraph: paragraphUsernameFeedback,
  text: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className: 'username-help-feedback',
  previousSibling: input
}

const validUsernameInfo = {
  paragraph: paragraphUsernameFeedback,
  text: 'Username válido =)',
  className: 'username-success-feedback',
  previousSibling: input
}

const invalidSumitInfo = {
  paragraph: paragraphSumitFeedback,
  text: 'Por favor, insira um username válido',
  className: 'submit-help-feedback',
  previousSibling: button
}

const validSumitInfo = {
  paragraph: paragraphSumitFeedback,
  text: 'Dados enviados =)',
  className: 'submit-success-feedback',
  previousSibling: button
}

const insertParagraphIntoDOM = paragraphInfo => {
  const { paragraph, text, className, previousSibling } = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  previousSibling.insertAdjacentElement('afterend', paragraph)
}

const removeSubmitParagraph = () => {
  const paragraphSumitFeedbackExists = document.querySelector('[data-feedback="submit-feedback"]')
  
  if(paragraphSumitFeedbackExists) {
    paragraphSumitFeedbackExists.remove()
  }
}

const showSubmitInfo =  event => {
  event.preventDefault()

  const isUsernameValid = testUsername(event.target.value)

  if(!isUsernameValid) {
    insertParagraphIntoDOM(invalidSumitInfo)
    return
  }
  
  insertParagraphIntoDOM(validSumitInfo)
}

const showUsernameInfo = event => {
  const isUsernameValid = testUsername(event.target.value)

  removeSubmitParagraph()
  
  if(!isUsernameValid) {
    insertParagraphIntoDOM(invalidUsernameInfo)
    return
  }
  
  insertParagraphIntoDOM(validUsernameInfo)
}

input.addEventListener('input', showUsernameInfo)
form.addEventListener('submit', showSubmitInfo)


/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/



/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const some = (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
     return true
    }
  }
  return false
}

console.log(some([1, 2, 3], item => item > 2))
console.log(some([1, 3, 5], item => item === 0) )
