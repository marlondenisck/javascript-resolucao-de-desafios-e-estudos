// for loop
// for ( let i = 0; i < 10; i++ ) {
//   console.log(i)
// }

const names = ['Linus', 'Ada', 'Bill']

// iteracao
for(let i = 0; i < names.length; i++) {
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate)
}