// const paragraph = document.querySelector('p')

// // obter as classes
// console.log(paragraph.classList)

// // setar uma nova classe
// paragraph.classList.add('error')
// // remover
// paragraph.classList.remove('error')

// paragraph.classList.add('success')


const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph) => {
  // innertext tras o texto visivel
  // textContent tras tudo inclusive se tiver o atributo display: none;
  // console.log(paragraph.textContent)
  
  if(paragraph.textContent.includes('error')) {
    paragraph.classList.add('error')
  }

  if(paragraph.textContent.includes('success')) {
    paragraph.classList.add('success')
  }
})


const title = document.querySelector('h1')

title.classList.toggle('test')

console.log(title)