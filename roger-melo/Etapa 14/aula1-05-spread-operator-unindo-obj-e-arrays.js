const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newArr = arr1.concat(arr2) // legado
const newArray = [0, ...arr1, 3.5, ...arr2, 7]

console.log(newArray)


const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop4: 4 }

const newObj = Object.assign({}, obj1, obj2) // legado
const newObject = { ...obj1, ...obj2 }

console.log(newObject)