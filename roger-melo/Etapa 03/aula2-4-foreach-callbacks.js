// forEach e callbacks
// const myFunc = callback => {
//   const value = 77

//   callback(value)
// }


// myFunc(number => {
//   console.log(number)
// })

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

// socialNetworks.forEach((item, index, array) => {
//   console.log(index, item, array)
// })

const logArrayInfo = (item, index, array) => {
  console.log(index, item, array)
}

socialNetworks.forEach(logArrayInfo)
