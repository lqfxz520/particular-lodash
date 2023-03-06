const map = function(a, fn) {
  let index = -1
  const length = a && a.length !== 0 ? a.length : 0
  const result = []

  while(++index < length) {
    const value = a[index]
    const bbb = fn(value, index, a)
    result.push(bbb)
  }
  return result
}

const indexOf = function(arrays, computed, index, comparator) {
  const length = arrays.length 
  index = index - 1

  while(++index < length) {
    if (comparator(arrays[index], computed)) {
      return index
    }
  }
  return -1
}

const bashPull = function(arrays, values, iteratee, comparator) {
  const length = values.length
  let index = -1, seen = arrays

  if (iteratee) {
    seen = map(arrays, iteratee)
  }

  while (++index < length) {
    const value = values[index]
    const computed = iteratee != null ? iteratee(value) : value
    let fromIndex = 0

    while((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== arrays) {
        seen.splice(fromIndex, 1)
      }
      arrays.splice(fromIndex, 1)
    }
  }
  return arrays
}

console.log(bashPull([1, 3], [1], undefined, function(a, b) { return a===b}))
export default bashPull;
