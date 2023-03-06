/**
 * 对一个数组查找元素，返回该索引
 * @param {Array} values 检测的数组
 * @param {*} target 匹配值
 * @param {number} fromIndex 检测的起始位置
 * @returns {number} 返回索引，否则返回 -1
 */
const strictIndexOf = function (values, target, fromIndex) {
  let index = fromIndex - 1;
  const { length } = values;

  while (++index < length) {
    if (values[index] === target) {
      return index;
    }
  }

  return -1;
};

export default strictIndexOf;
