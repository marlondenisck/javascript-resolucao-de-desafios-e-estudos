const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  // retorna o nome da classe html onde foi clicado
  const classNameOfClickedElement = event.target.classList[0]

  // array que armazena as classe html para verificacao
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']

  // some percorre o array e retorna boolean se algum item existir
  const shouldClosePopup = classNames.some((className) => {
    // se no array existir a classe que foi clicada retorna true
    return className === classNameOfClickedElement
  })
  
  // se true
  if(shouldClosePopup) {
    popup.style.display = 'none'
  }
})