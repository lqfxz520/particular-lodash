const filter = function(array, predicate) {
  const length = array == null ? 0 : array.length;
  const result = [];
  let resultIndex = 0;
  let index = -1;

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resultIndex++] = value;
    }
  }

  return result;
}
export default filter;
