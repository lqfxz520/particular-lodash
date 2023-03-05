/**
 * 去除重复的元素
 *
 * @param {Array} array 目标数组
 * @param {Function} [iteratee] 初始化每一个元素
 * @param {Function} [comparator] 自定义配合符合的元素
 * @returns [Array] 返回新的数组
 */
const baseUniq = function (array, iteratee, comparator) {
  let include = arrayIncludes;
  let isCommon = true;
  const { length } = array;
  const result = array;
  let seen = result;

  if (comparator) {
    include = arrayIncludesWith;
    isCommon = false;
  } else if (length > 200) {
    isCommon = false;
    include = cacheHas
    seen = new SetCache
  } else {
    seen = iteratee ? [] : result
  }
};
