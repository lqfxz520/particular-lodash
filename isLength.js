/**
 * 判断是不是有效的数组长度
 *
 * @param {*} value 检测值
 * @returns {boolean} 如果是一个有效长度返回 `true` 否则返回 `false`
 */
const isLength = function (value) {
  return (
    typeof value === "number" &&
    value % 1 == 0 &&
    value > -1 &&
    Number.isSafeInteger(value)
  );
};

export default isLength;
