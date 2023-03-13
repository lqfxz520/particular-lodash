/**
 * 判断两个值是否相等，包括 NaN
 *
 * @param {*} value 判断的值
 * @param {*} othValue 判断的值
 * @returns {boolean} 如果相等返回 `true`，否则返回 `false`
 */
const eq = function (value, othValue) {
  return value === othValue || (value !== value && othValue !== othValue);
};

export default eq;
