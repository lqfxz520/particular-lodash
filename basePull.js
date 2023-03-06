import map from "./map.js";

const indexOf = function (arrays, computed, index, comparator) {
  const length = arrays.length;
  index = index - 1;

  while (++index < length) {
    if (comparator(arrays[index], computed)) {
      return index;
    }
  }
  return -1;
};

const bashPull = function (arrays, values, iteratee, comparator) {
  const length = values.length;
  let index = -1,
    seen = arrays;

  if (iteratee) {
    seen = map(arrays, iteratee);
  }

  while (++index < length) {
    const value = values[index];
    const computed = iteratee != null ? iteratee(value) : value;
    let fromIndex = 0;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== arrays) {
        seen.splice(fromIndex, 1);
      }
      arrays.splice(fromIndex, 1);
    }
  }
  return arrays;
};

export default bashPull;
