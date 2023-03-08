/**
 * 循环数组返回每一个处理过后的元素
 *
 * @param {Array} array 检查的元素
 * @param {Function} iteratee 每一个元素调用该函数
 * @returns {Array} 返回处理过后的数组
 */
const map = function (array, iteratee) {
  const length = array != null ? array.length : 0;
  const result = new Array(length);
  let index = -1;

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
};

export default map;
