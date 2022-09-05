// const { template } = require('@babel/core')

function concatArray(array1, array2) {
  newArr = [] 
  for (elem of array1) {
    newArr.push(elem)
  }
  for (elem of array2) {
    newArr.push(elem)
  }
  return newArr
}


console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
// module.exports = concatArray
