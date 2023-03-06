import isLength from './isLength.js';
/**
 * 检测是不是数组，包括字符串/类数组
 *
 * @param {*} value 检测变量
 */
const isArrayLike = function (value) {
  return value != null && typeof value !== "function" && isLength(value.length);
};

export default isArrayLike;
