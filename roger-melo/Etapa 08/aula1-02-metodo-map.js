// com o map é possivel obter um novo array com a mesma quantidade de item do array original
// so que com cada item modificado

// o forEach nao retorna um novo valor

// Exemplo 1
const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(item  => item * 2)

//console.log(doubleNumbers)


// Exemplo 2
const prices = [10, 20, 30, 25, 6, 8]
const salesPrices = prices.map(price => price / 2)

//console.log(salesPrices)


// Exemplo 3
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

// Produtos com preco acima de 30 recebem 50% de desconto
const saleProducts = products.map(product => {
  if(product.price >= 30) {
    return {
      name: product.name, 
      price: product.price / 2
    }
  }
  return product
})

console.log(products)
console.log(saleProducts)