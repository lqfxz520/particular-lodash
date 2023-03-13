import eq from "../eq";

/**
 * 去除重复的元素，但是需要保证数组元素排序是正确的
 *
 * @param {Array} array 检查的数组
 * @param {Function} iteratee 处理每个子元素值
 * @returns {Array} 返回新的数组
 */
const baseSortedUniq = function (array, iteratee) {
  let index = -1;
  let seen;
  let resIndex = 0;

  const result = [];
  const { length } = array;

  while (++index < length) {
    const value = array[index],
      computed = iteratee ? iteratee(value) : value;

    if (!index || !eq(computed, seen)) {
      seen = computed;
      result[resIndex++] = value;
    }
  }
  return result;
};

export default baseSortedUniq;
