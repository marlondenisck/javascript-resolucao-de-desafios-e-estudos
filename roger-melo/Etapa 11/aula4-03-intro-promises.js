const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    
    if(isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    } 
    
    if(isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
    }
  })
  
  request.open('GET', url)
  request.send()
}


const getData = () => {
  // Promise -> é um objeto que representa o sucesso ou uma falha de uma operacao assincrona
  return new Promise((resolve, reject) => {
    // resolve -> trata os sucessos e reject -> as falhas
    resolve('dados aqui')
    reject('erro aqui')
  })
}

getData()
  // then -> responsavel por receber os dados de sucesso da promise
  .then(value => console.log(value)) // value recebe diretamente os dados do resolve acima
  // catch trata erros
  .catch(error => console.log(error)) // essa funcao so é invocada quando o reject da promise for chamado, ou se no then acima apresentar algum erro

