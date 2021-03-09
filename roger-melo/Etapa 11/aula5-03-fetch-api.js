// Fetch -> buscar, essa usa promises por baixo dos panos
// 1- Buscar os dados atravez do metodo fetch
// 2- Obter uma resposta(response) e retornar uma promise (return response.json())
// 3- Encadear um 2 then na promise do primeiro
// 4- mostrar/alterar os dados obtidos
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => {console.log(error)})