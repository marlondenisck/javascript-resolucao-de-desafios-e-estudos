const postTitle = 'É bolacha ou biscoito?'
const postComments = 15
const postAuthor = 'Roger Melo'

// usando concatenação
let postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'
console.log(postMessage)


// usando template strings
postMessage = `O post "${postTitle}" do ${postAuthor} tem ${postComments} comentários.`
console.log(postMessage)

// criando template HTML
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários.</span>
`

console.log(html)