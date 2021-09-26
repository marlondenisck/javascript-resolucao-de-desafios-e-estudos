const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

const createTransaction = objTransation => {
  user.transactions.push(objTransation)
  
  if(objTransation.type === 'credit') {
    user.balance += objTransation.value
  }
  if(objTransation.type === 'debit') {
    user.balance -= objTransation.value
  }
}

const getHigherTransactionByType = type => {
  let transationHight;
  let transactionValue = 0
  let allTransactions = user.transactions

  for (let transacition of allTransactions) {
    if(transacition.type === type && transacition.value > transactionValue) {
      transactionValue = transacition.value
      transationHight = transacition
    }
  }

  return transationHight
}

const getAverageTransactionValue = () => {
  let average = 0

  user.transactions.forEach(transaction => average += transaction.value)
  
  return average / user.transactions.length
}

const getTransactionsCount = () => {
  let count = {
    credit: 0,
    debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

// console.log(user.balance) 

// console.log(getHigherTransactionByType('credit')) 
// console.log(getHigherTransactionByType('debit')) 

// console.log(getAverageTransactionValue()) 

console.log(getTransactionsCount())