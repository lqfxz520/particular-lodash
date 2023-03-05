/**
 * 实现一个可以从指定的位置查找元素
 *
 * @param {Array} array 查找的数组
 * @param {*} value 匹配的值
 * @param {number} fromIndex 检查数组的起始位置
 * @returns {number} 返回查到元素的索引，否则返回 -1
 */
const baseIndexOf = function (array, value, fromIndex) {
  // return value === value
  //   ? strictIndexOf(array, value, fromIndex)
  //   : findIndexOf(array, baseIsNaN, fromIndex);
  return strictIndexOf(array, value, fromIndex);
};

export default baseIndexOf;
