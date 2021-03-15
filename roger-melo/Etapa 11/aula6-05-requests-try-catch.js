// const getUsers = async () => await 
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())

const getUsers = async () => {
  try {
    const response = await fetch('./json/atry.json')
    
    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()

  } catch(error) {
    console.log(error)
  }
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()