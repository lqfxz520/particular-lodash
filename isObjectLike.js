/**
 * 判断是否引用类型
 *
 * @param {*} value 判断的变量
 * @returns {boolean} true 代表是引用数组类型
 */
const isObjectLike = function (value) {
  return value != null && typeof value === "object";
};

export default isObjectLike;
