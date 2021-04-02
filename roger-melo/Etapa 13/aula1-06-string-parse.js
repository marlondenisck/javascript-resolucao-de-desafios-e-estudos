const myArry = [
  { a:1, b: 2},
  { c:3, d: 4},
  { e:5, f: 6}
]

// localStorage.clear()

localStorage.setItem('myArray', JSON.stringify(myArry))

const JSONFromLocalStorage = localStorage.getItem('myArray')
const myConvertedArray = JSON.parse(JSONFromLocalStorage)

console.log(myConvertedArray)
