/**
 * 根据 comparator 函数查元素
 *
 * @param {Array} values 检查数组
 * @param {*} target 匹配值
 * @param {Function} comparator 自定义函数
 * @returns {boolean} 匹配到返回 true，否则返回 false
 */
const arrayIncludesWith = function (values, target, comparator) {
  const { length } = values;
  let index = -1;

  while (++index < length) {
    if (comparator(values[index], target)) {
      return true;
    }
  }

  return false;
};

export default arrayIncludesWith;
