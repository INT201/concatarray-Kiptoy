const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if ((array1 == null || array1 == undefined) && !(array2 == null || array2 == undefined)) {
    return array2
  } else if (!(array1 == null || array1 == undefined) && (array2 == null || array2 == undefined)) {
    return array1
  } else if ((array1 == null || array1 == undefined) && (array2 == null || array2 == undefined)) {
    return undefined
  }
  return array1.concat(array2)
}


module.exports = concatArray
