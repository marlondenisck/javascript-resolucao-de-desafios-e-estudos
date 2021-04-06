const str = 'abc'

const getReverseString = string => [...string].reverse().join('')

console.log(getReverseString(str))


const numbers = [7, 3, 5, 3.1, 9]

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))
