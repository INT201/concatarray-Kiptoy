// const { template } = require('@babel/core')

function concatArray(array1, array2) {
  for (elem of array2) {
    array1.push(elem)
  }
  return array1
}
function concatArray(array1, array2, array3) {
  return 0
}

console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
// module.exports = concatArray
