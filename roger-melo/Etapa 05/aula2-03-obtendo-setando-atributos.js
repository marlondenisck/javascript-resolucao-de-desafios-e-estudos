// get e set atributes
const link = document.querySelector('a')

// pegando o conteudo do atributo html
console.log(link.getAttribute('href'))

// setando um novo valor no conteudo do atributo html
link.setAttribute('href', 'https://rogermelo.com.br')

// setando um novo valor para conteudo da tag html
link.innerText = 'Site do Roger Melo'

console.log(link)


const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'success')

// setando um novo atributo que ainda nao existe no html 
paragraph.setAttribute('style', 'color:green;')

console.log(paragraph)
